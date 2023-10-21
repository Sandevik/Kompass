import Link from 'next/link'
import React from 'react'

export default function SER({pages}: {pages: Page[]}) {
  return (
    <ul className="flex flex-col ml-60 gap-4 mt-4">
        {pages.map(page => (
            <li>
                <Link href={page.url} target='_blank' className="text-blue-600 font-semibold text-xl">
                    {page.title}
                </Link>
                <p>{page.description}</p>
            </li>
        ))}
    </ul>
  )
}
