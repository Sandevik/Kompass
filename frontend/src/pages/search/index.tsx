import SearchArea from '@/components/SearchArea';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';


export default function index() {



  return (
    <main className="bg-gray-200 h-[100vh]">

      <SearchArea />
      
      
    </main>
  )
}
