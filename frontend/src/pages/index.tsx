import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import {BiSearch} from "react-icons/bi"


export default function Home() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  useEffect(()=>{
    document.addEventListener("keypress", (e) => onKeyPress(e))
    return () => document.removeEventListener("keypress", (e) => onKeyPress(e))

  },[])

  const onKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        console.log(query)
        if (query !== "") router.push("/search?q="+query.split(" ").join("+"));
        break;
      default:
         break;
    }
  }


  return (
    <main className={`bg-gray-200 h-[100vh] grid place-items-center`}>
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center">
          <img src="/Kompass2d.png" className="h-40 w-40" alt="" />
          <h1 className="text-6xl font-bold">K<span className="text-gray-500">o</span>mpass</h1>
        </div>
        <div className="h-10 flex">
          <div className="relative">
            <input type="text" className="p-2 h-full w-[500px] rounded-l-md text-lg" placeholder='Find your way...' value={query} onChange={(e) => setQuery(e.target.value)} />
            <BiSearch className="w-7 h-7 absolute right-1 top-2 text-gray-500"/>
          </div>
          <button onClick={()=> router.push(`/search?q=${query.split(" ").join("+")}`)} className="w-20 bg-blue-200 h-full text-gray-600 rounded-r-md font-semibold text-xl hover:bg-blue-300 transition-colors">Find</button>
        </div>
      </div>
    </main>
  )
}
