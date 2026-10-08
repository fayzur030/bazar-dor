'use client'
import { Product } from '@/types/productTypes'
import { Key, Label, ListBox, Select } from '@heroui/react'
import PriceCard from './shared/PriceCard'
import { useState } from 'react'
import { banglaNumber } from '@/utils/unitLabel'

//sort stypes

type ProductSortOption = 'ডিফল্ট' | 'দাম: কম থেকে বেশি' | 'দাম: বেশি থেকে কম'
const sortOptions = [
  { value: 'ডিফল্ট', label: 'ডিফল্ট' },
  { value: 'দাম: কম থেকে বেশি', label: 'দাম: কম থেকে বেশি' },
  { value: 'দাম: বেশি থেকে কম', label: 'দাম: বেশি থেকে কম' },
]
//product Interface

interface AllProductsProps {
  allProducts: Product[]
}

const ProductSort = ({ allProducts }: AllProductsProps) => {
  const [sortBy, setSortBy] = useState<ProductSortOption>('ডিফল্ট')

  // handelSortChange function
  const sortedProducts = (products: Product[]) => {
    const sorted = [...products]
    if (sortBy === 'দাম: বেশি থেকে কম') {
      sorted.sort((a, b) => b.today - a.today)
    } else if (sortBy === 'দাম: কম থেকে বেশি') {
      sorted.sort((a, b) => a.today - b.today)
    }
    return sorted
  }
  const sortedProductsList = sortedProducts(allProducts)

  // handelChange

  const handelSortChange = (value: Key | null) => {
    if (value) {
      setSortBy(value as ProductSortOption)
    }
  }

  return (
    <div id='সব_পণ্য' className='mx-auto mt-10 max-w-7xl  pb-96'>
      <div className=' flex flex-col items-start gap-4 md:flex-row justify-between px-3 lg:px-0'>
        {/* Section Info */}
        <div>
          <h2 className='text-lg font-bold text-gray-900 md:text-xl'>
            সব পণ্য
          </h2>

          <p className='text-sm text-[#5A6762] lg:text-base'>
            {`মোট ${banglaNumber(allProducts.length)} টি পণ্য দেখানো হচ্ছে`}
          </p>
        </div>

        {/* Sort */}
        <Select
          className='w-[256px]'
          placeholder='ডিফল্ট'
          value={sortBy}
          onChange={handelSortChange}
        >
          <Label>সাজান</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              {sortOptions.map((option) => (
                <ListBox.Item
                  key={option.value}
                  id={option.value}
                  textValue={option.label}
                >
                  {option.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6'>
        {sortedProductsList.map((product) => (
          <PriceCard
            key={product.slug}
            product={product}
            trend={product.change.dir}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductSort
