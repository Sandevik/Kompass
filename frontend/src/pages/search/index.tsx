import SER from '@/components/SER';
import SearchArea from '@/components/SearchArea';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';

const pages: Page[] = [
  {
    title: "New revolutionizing DAPP",
    description: "lorem ipsum dolor sit amet dolor amet sit lorem",
    url: "https://younify.xyz",
    score: 19,
    keywords: [],
    external_links: [],
    internal_links: [],
  },
  {
    title: "DeFi is the future, here is why",
    description: "",
    url: "https://younify.xyz",
    score: 9,
    keywords: [],
    external_links: [],
    internal_links: [],
  }
]

const pages2: Page[] = [
  {
    title: "New revolutionizing DAPP",
    description: "lorem ipsum dolor sit amet dolor amet sit lorem",
    url: "https://younify.xyz",
    score: 9,
    keywords: [],
    external_links: [],
    internal_links: [],
  },
  {
    title: "DeFi is the future, here is why",
    description: "",
    url: "https://younify.xyz",
    score: 19,
    keywords: [],
    external_links: [],
    internal_links: [],
  }
]


const domains: Domain[] = [
  {
    root_url: "https://younify.xyz",
    internal_pages: pages,
    summerized_score: 28,
    keywords: [],
    urls: [],
    sitemap_location: "https://younify.xyz/sitemap.xml"
  },
  {
    root_url: "https://younified.xyz",
    internal_pages: pages2,
    summerized_score: 28,
    keywords: [],
    urls: [],
    sitemap_location: "https://younified.xyz/sitemap.xml"
  }
]


export default function index() {

  const getRelevantPage = (domain: Domain): Page => {
    let currentPage: Page = {} as Page;
    let hightestScore: number = 0; 
    domain.internal_pages.forEach(page => {
      if (page.score > hightestScore) {
        hightestScore = page.score;
        currentPage = page;
      }
    })
    return currentPage;
  }

  return (
    <main className="bg-gray-300 h-[100vh]">

      <SearchArea />
      <SER pages={domains.map(domain => (getRelevantPage(domain)))}/>

    </main>
  )
}
