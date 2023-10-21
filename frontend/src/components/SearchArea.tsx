import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import {BiSearch} from "react-icons/bi";
import {VscChromeClose} from "react-icons/vsc";

export default function SearchArea({}) {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [query, setQuery] = useState<string>(searchParams.get("q") || "");
  
    useEffect(()=>{
      setQuery(searchParams.get("q") || "");
    },[searchParams])
  

  return (
    <div className="flex bg-gray-200 p-4 gap-5 items-center border-b-2 border-gray-300 bg-opacity-70 ">
        <div className="flex w-full items-center gap-5">
        <Link href="/" className="flex items-center gap-2 px-2">
          <img src="/Kompass2d.png" className="h-12 w-12" alt="Kompass logo" />
          <span className="text-3xl font-semibold text-gray-600">Kompass</span>
        </Link>
        <div className="relative w-[50%] h-full">
          <input type="text" className="text-black w-full p-2 pl-8 rounded-md" value={query} onChange={(e) => setQuery(e.target.value)} />
          <BiSearch className="w-5 h-5 absolute left-1.5 top-2.5 text-gray-500"/>
          <VscChromeClose onClick={() => setQuery("") } className="w-5 h-5 absolute right-2 top-2.5 text-gray-600 cursor-pointer"/>
        </div>
        <button onClick={()=> router.push(`/search?q=${query.split(" ").join("+")}`)} className="w-20 bg-blue-200 text-gray-600 h-10 rounded-md font-semibold text-xl hover:bg-blue-300 transition-colors">Find</button>
        </div>
        <button className=" w-44 bg-blue-200 hover:bg-blue-300 transition-colors text-gray-600 h-10 px-1 rounded-md font-semibold">Index your website</button>
    </div>
  )
}
