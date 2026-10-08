import AllProducts from '@/components/AllProducts'
import Banner from '@/components/Banner'
import PriceDecrease from '@/components/PriceDecrease'
import PriceIncrease from '@/components/PriceIncrease'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense>
        <PriceIncrease />
        <PriceDecrease />
        <AllProducts />
      </Suspense>
    </div>
  )
}
