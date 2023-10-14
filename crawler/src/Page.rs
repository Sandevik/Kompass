use quick_xml::{events::Event, Reader};
use regex::Regex;
use std::collections::HashMap;

use crate::load_keywords;

#[derive(Debug)]
pub struct Page {
    pub score: u16,
    internal_links: Option<Vec<String>>,
    external_links: Option<Vec<String>>,
    pub keywords: Vec<String>,
    pub url: String,
}

impl Page {
    pub fn empty() -> Self {
        Page {
            score: 0,
            internal_links: None,
            external_links: None,
            url: String::new(),
            keywords: Vec::new(),
        }
    }
    pub fn new(url: &str) -> Self {
        Page {
            score: 0,
            internal_links: None,
            external_links: None,
            keywords: Vec::new(),
            url: url.to_owned(),
        }
    }

    pub async fn analyze(&mut self) -> () {
        let keywords: Vec<String> = load_keywords();

        let request_client = reqwest::Client::new();
        let html = request_client
            .get(self.url.as_str())
            .send()
            .await
            .expect("Could not read website")
            .text()
            .await
            .expect("Could not read html");

        let mut reader: Reader<&[u8]> = Reader::from_str(&html);
        reader.trim_text(true);

        let mut buf: Vec<u8> = Vec::<u8>::new();
        let mut extracted_text = String::new();
        let mut internal_links = Vec::<String>::new();
        let mut external_links = Vec::<String>::new();
        let website_regex = Regex::new(r"(?m)^(https?:\/\/)?[\w\/\.]+\.[\w?=\/]+$(?m)").unwrap();

        //get links
        loop {
            match reader.read_event_into(&mut buf) {
                Err(e) => {
                    println!("ERROR: Could not read event : {e}")
                }
                Ok(Event::Eof) => break,
                Ok(Event::Text(e)) => {
                    extracted_text.push(' ');
                    extracted_text.push_str(&e.unescape().unwrap().into_owned());
                }
                Ok(Event::Start(e)) => {
                    match e.name().as_ref() {
                        b"a" => {
                            e.attributes().for_each(|attribute| {
                                let attr = attribute.clone().unwrap().clone();
                                let key_vec = attr.key.0.to_vec();
                                let key = String::from_utf8(key_vec).unwrap();
                                let value = String::from_utf8(
                                    attribute.clone().unwrap().clone().value.to_vec(),
                                )
                                .unwrap();
                                if key == "href" && value != "" {
                                    // check if link is internal or external with regex
                                    if website_regex.find(&value).is_some() {
                                        if value.contains(&self.url) {
                                            internal_links.push(value)
                                        } else {
                                            external_links.push(value);
                                        }
                                    } 
                                }
                            })
                        }
                        _ => (),
                    }
                }
                _ => (),
            }
            buf.clear();
        }

        // Get keywords and the amount of keywords from page
        let mut contained_keywords: Vec<String> = Vec::<String>::new();
        let mut word_dictionary = HashMap::<String, u16>::new();

        for word in extracted_text.split(' ') {
            for keyword in &keywords {
                if word == keyword && word_dictionary.contains_key(word) {
                    word_dictionary.insert(word.to_lowercase(), word_dictionary[word] + 1);
                } else if word == keyword
                    && !word_dictionary.contains_key(word)
                    && word != "\n"
                    && word != "-"
                    && word != ""
                {
                    word_dictionary.insert(word.to_lowercase(), 1);
                    contained_keywords.push(keyword.clone());
                }
            }
        }

        self.keywords = contained_keywords;

        //calculate keyword score
        let mut keyword_score: u16 = 0;
        for (_, count) in &word_dictionary {
            keyword_score += count;
        }

        self.score += keyword_score;

        //add links
        //todo: Add link score.
        if external_links.len() > 0 {
            self.external_links = Some(external_links)
        } else {
            self.external_links = None;
        }

        if internal_links.len() > 0 {
            self.internal_links = Some(internal_links)
        } else {
            self.internal_links = None;
        }
    }
}
