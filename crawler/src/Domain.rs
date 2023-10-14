use quick_xml::Reader;
use regex::Regex;
use crate::Page::Page;

#[derive(Debug)]
pub struct Domain {
    root_url: String,
    internal_pages: Vec<Page>,
    summerized_score: u16,
    keywords: Vec<String>,
    sitemap_location: Option<String>,
    urls: Option<Vec<String>>,
}

impl Domain {
    pub async fn new(root_url: String, sitemap_location: Option<String>) -> Self {
        Domain {
            root_url,
            internal_pages: Vec::new(),
            summerized_score: 0,
            keywords: Vec::new(),
            sitemap_location,
            urls: None,
        }
    }

    pub fn add_page(&mut self, page: Page) -> () {
        self.internal_pages.push(page);
    }

    pub fn change_sitemap_location(&mut self, location: Option<String>) -> () {
        self.sitemap_location = location;
    }

    pub async fn analyze(&mut self) -> () {
        // Analyze all pages within a domain
        let mut pages: Vec<Page> = Vec::new();
        match &self.urls {
            Some(urls) => {
                for url in urls {
                    let mut page: Page = Page::new(url);
                    page.analyze().await;
                    pages.push(page);
                }
            }
            None => (),
        }
        self.internal_pages = pages;

        let mut summerized_score: u16 = 0;
        let _ = &self.internal_pages.iter().for_each(|page| {
            summerized_score += &page.score;
            page.keywords.clone().iter().for_each(|keyword| {
                if !self.keywords.contains(keyword) {
                    self.keywords.push(keyword.clone());
                }
            });
        });
        self.summerized_score = summerized_score;
    }

    pub async fn scan_sitemap(&mut self, location: &str) -> () {
        let request_client = reqwest::Client::new();
        let xml = request_client
            .get(location)
            .send()
            .await
            .expect("Could not read website")
            .text()
            .await
            .expect("Could not read xml");

        let mut reader: Reader<&[u8]> = Reader::from_str(&xml);
        reader.trim_text(true);

        let url_regex = Regex::new(r"(?m)<loc>(https?:\/\/)?[\w\/\.]+\.[\w?=\/]+</loc>(?m)").unwrap();

        let matches: Vec<_>  = url_regex.find_iter(&xml).map(|m| m.as_str().parse::<String>().ok()).collect();

        let cleaned_matches: Vec<_> = matches.iter().map(|m| {
            let string = String::from(m.clone().unwrap());
            let cleaned = string.clone().strip_prefix("<loc>").unwrap().strip_suffix("</loc>").unwrap().to_string();
            cleaned
        }).collect();

        println!("{:?}", cleaned_matches);

        if cleaned_matches.len() > 0 {
            self.urls = Some(cleaned_matches);
        }else {
            self.urls = None;
        }


    }
}
