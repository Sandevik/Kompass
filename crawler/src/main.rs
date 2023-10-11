use std::borrow::BorrowMut;
use std::collections::HashMap;
use std::fs;
use std::future::Future;
use std::hash::Hash;
use quick_xml::events::attributes::Attribute;
use reqwest::{self, Client};
use quick_xml;
use quick_xml::events::Event;
use quick_xml::reader::Reader;
use std::borrow::Borrow;

#[derive(Debug)]
struct Link {
    site_url: String,
    site_score: Option<u32>,
}

#[derive(Debug)]
struct Site {
    internal_links: Option<Vec<Link>>,
    external_links: Option<Vec<Link>>,
    word_dictionary: HashMap<String, u16>,
    score: u16,
}

impl Site {
    pub fn new() -> Self {
        Site {internal_links: None, external_links: None, word_dictionary: HashMap::new(), score: 0 }
    }
}

#[tokio::main]
async fn main() {

    const URL: &str = "https://younify.xyz";
    const SITEMAP_URL: &str = "https://younify.xyz/sitemap.xml";

    let keywords = load_keywords();

    let request_client = reqwest::Client::new();
    
    let mut site = extract_values(&request_client, URL, &keywords).await;


    //todo: add parser for sitemap!
    // then crawl all those pages! 



    println!("{site:#?}");
}

async fn access_website(client: &Client, url: &str) -> String {
    let html = client.get(url).send().await.expect("Could not read website").text().await.expect("Could not read html");
    html
}

fn load_keywords() -> Vec<String> {
    let load_key_words = fs::read_to_string("src/common_web3_words.txt").expect("ERROR: Could not read commont words");
    let mut key_words = Vec::<String>::new();
    for str in load_key_words.split('\n') {
        key_words.push(str.strip_suffix("\r").unwrap_or(str).to_owned());
    } 
    key_words
}

async fn extract_values<'a>(request_client: &Client, url: &str, keywords: &Vec<String>) -> Site {

    let raw_html = access_website(&request_client, url).await;

    let mut reader = Reader::from_str(&raw_html);
    reader.trim_text(true);

    let mut buf = Vec::new();
    let mut extracted_text = String::new();

    let mut links: Vec<String> = Vec::new();
    let mut internal_links = Vec::<String>::new();
    let mut external_links = Vec::<String>::new();



    loop {
        match reader.read_event_into(&mut buf) {
            Err(e) => {println!("ERROR: Could not read event : {e}")},
            Ok(Event::Eof) => break,
            Ok(Event::Text(e)) => {
                extracted_text.push(' ');
                extracted_text.push_str(&e.unescape().unwrap().into_owned());
            },
            Ok(Event::Start(e)) => {
                match e.name().as_ref() {
                    b"a" => {
                        e.attributes().for_each(|attribute| {

                            let attr = attribute.clone().unwrap().clone();
                            let key_vec = attr.key.0.to_vec();
                            let key = String::from_utf8(key_vec).unwrap();
                            let value = String::from_utf8(attribute.clone().unwrap().clone().value.to_vec()).unwrap();
                            if key == "href" && value != "" {
                                links.push(value);
                            }

                        })
                    }
                    _ => ()
                }
                
            }
            _ => ()
        }
    }

    let mut word_dictionary = HashMap::<String, u16>::new();

    for word in extracted_text.split(' ') {
        for keyword in keywords {
            if word == keyword && word_dictionary.contains_key(word) {
                word_dictionary.insert(word.to_lowercase(), word_dictionary[word] + 1);
            } else if word == keyword && !word_dictionary.contains_key(word) && word != "\n" && word != "-" && word != "" {
                word_dictionary.insert(word.to_lowercase(), 1);
            }
        }
    }


    let mut score: u16 = 0;

    for (_, count) in &word_dictionary {
        score += count;
    }


    let mut site = Site::new();


    site.word_dictionary = word_dictionary;

    if external_links.len() > 0 {
        score += 2 * external_links.len() as u16;
        let external: Vec<Link> = external_links.iter().map(|link| {Link {site_url: link.to_owned(), site_score: None}}).collect();
        site.external_links = Some(external)
    } else {
        site.external_links = None;
    }
    if internal_links.len() > 0 {
        let internal: Vec<Link> = internal_links.iter().map(|link| {Link {site_url: link.to_owned(), site_score: None}}).collect();
        site.internal_links = Some(internal)
    } else {
        site.internal_links = None;
    }


    site.score = score;

    println!("{links:?}");
    site

}

