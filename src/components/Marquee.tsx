import React from 'react'
import MarqueeList from './MarqueeList'
import { getAllProducts } from '@/services/productService'

const Marquee = async () => {
  const priceTicker = await getAllProducts()
  return (
    <div className='bg-white'>
      <MarqueeList priceTicker={priceTicker} />
    </div>
  )
}

export default Marquee
