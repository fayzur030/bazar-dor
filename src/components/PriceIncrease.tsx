import { getAllProducts } from '@/services/productService'
import { Triangle } from 'lucide-react'
import PriceCard from './shared/PriceCard'

const PriceIncrease = async () => {
  const products = await getAllProducts()

  const topIncreasePrice = products
    .filter((product) => product.change.dir === 'up')
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6)

  return (
    <section className='mx-3 mt-9 lg:mx-0'>
      <div className='mx-auto max-w-7xl'>
        {/* Section Header */}
        <div className='mb-5 flex items-center gap-2'>
          <Triangle size={17} className='rotate-0 fill-red-500 text-red-500' />

          <h2 className='text-lg font-bold text-gray-900 md:text-xl'>
            আজ দাম বেড়েছে
          </h2>
        </div>

        {/* Products */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {topIncreasePrice.length === 0 ? (
            <p className='col-span-full py-10 text-center text-sm text-[#5A6762]'>
              আজ কোনো পণ্যের দাম বাড়েনি।
            </p>
          ) : (
            topIncreasePrice.map((product) => (
              <PriceCard key={product.slug} product={product} trend='up' />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default PriceIncrease
