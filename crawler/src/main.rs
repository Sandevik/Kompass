mod Domain;
mod Page;
use std::fs;
use Page::Page as _Page;
use Domain::Domain as _Domain;



#[tokio::main]
async fn main() {

    const URL: &str = "https://younify.xyz";
    const SITEMAP_URL: &str = "https://younify.xyz/sitemap.xml";

    let mut domain = _Domain::new(URL.to_owned(), Some(SITEMAP_URL.to_owned())).await;
    domain.scan_sitemap(SITEMAP_URL).await;





    //todo: add parser for sitemap!
    // then crawl all those pages! 



    println!("{domain:#?}");
}


fn load_keywords() -> Vec<String> {
    let load_key_words = fs::read_to_string("src/common_web3_words.txt").expect("ERROR: Could not read commont words");
    let mut key_words = Vec::<String>::new();
    for str in load_key_words.split('\n') {
        key_words.push(str.strip_suffix("\r").unwrap_or(str).to_owned());
    } 
    key_words
}

