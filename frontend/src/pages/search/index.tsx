import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function index() {

    const searchParams = useSearchParams();



  return (
    <div>{searchParams.get("q")}</div>
  )
}
