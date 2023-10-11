use crate::Page::Page;

#[derive(Debug)]
pub struct Domain {
    internal_pages: Vec<Page>,
    summerized_score: u16,
    sitemap_location: String,
}