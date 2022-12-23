
import { useRouter } from 'next/router'
import React from 'react'

const DocsHomePage = () => {
  const {params = []} = useRouter().query;
  console.log(params)
  return (
    <div>
        <h1>
            DocsHome Page {params.map((item,index)=><div key={index}>{item}</div>)}
        </h1>
    </div>
  )
}

export default DocsHomePage