use std::collections::HashMap;
use std::fs;
use std::future::Future;
use std::hash::Hash;
use reqwest::{self, Client};
use quick_xml;
use quick_xml::events::Event;
use quick_xml::reader::Reader;

struct Website {
    content: String,
    links: Vec<String>,
    word_dictionary: HashMap<String, u16>
}

#[tokio::main]
async fn main() {

    let keywords = load_keywords();

    let request_client = reqwest::Client::new();
    let raw_html = access_website(&request_client, "https://younify.xyz").await;

    let mut reader = Reader::from_str(&raw_html);
    reader.trim_text(true);

    let mut buf = Vec::new();
    let mut extracted_text = String::new();

    loop {
        match reader.read_event_into(&mut buf) {
            Err(e) => {println!("ERROR: Could not read event : {e}")},
            Ok(Event::Eof) => break,
            Ok(Event::Text(e)) => {
                extracted_text.push(' ');
                extracted_text.push_str(&e.unescape().unwrap().into_owned());
            },
            _ => ()
        }
    }

    let mut word_dictionary = HashMap::<String, u16>::new();

    for word in extracted_text.split(' ') {
        if word_dictionary.contains_key(word) {
            word_dictionary.insert(word.to_lowercase(), word_dictionary[word] + 1);
        } else {
            if word != "\n" || word != "-" || word != "" {
                word_dictionary.insert(word.to_lowercase(), 1);
            }
        }
    }


    println!("{keywords:#?}");
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