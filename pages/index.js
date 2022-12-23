import { useRouter } from 'next/router'
import React from 'react'

const Home = () => {
    const router = useRouter();
  return (
    <div>
        Hello
        <p onClick={()=>router.push('/product')}>
            Place Order
        </p>
    </div>
  )
}

export default Home