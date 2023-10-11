use crate::Page::Page;

#[derive(Debug)]
pub struct Domain {
    root_url: String,
    internal_pages: Vec<Page>,
    summerized_score: u16,
    sitemap_location: Option<String>,
    urls: Option<Vec<String>>,
}

impl Domain {

    pub fn new(root_url: String, sitemap_location: Option<String>) -> Self {
        Domain {
            root_url,
            internal_pages: Vec::new(),
            summerized_score: 0,
            sitemap_location,
            urls: Self::get_sitemap_content(),
        }
    }

    pub fn add_page(&mut self, page: Page) -> () {
        self.internal_pages.push(page);
    }

    pub fn remove_page(&mut self, url: String) -> () {
        self.internal_pages = self.internal_pages.iter().filter(|page| page.url.to_owned() == url).collect();
    }

    pub fn change_sitemap_location(&mut self, location: Option<String>) -> () {
        self.sitemap_location = location;
    }

    pub fn analyze(&mut self) -> () {

        //for each page, 




        let mut summerized_score: u16 = 0;
        &self.internal_pages.iter().for_each(|page| summerized_score += page.score);
        self.summerized_score = summerized_score;
    }

    pub fn get_sitemap_content() -> Option<Vec<String>> {
        todo!();
    }


}