'use client'

import { Key, Label, ListBox, Select } from '@heroui/react'
import { useState } from 'react'
import { Product } from '@/types/productTypes'
import PriceCard from './shared/PriceCard'
import { banglaNumber } from '@/utils/unitLabel'

// Sort types
type ProductSortOption = 'ডিফল্ট' | 'দাম: কম থেকে বেশি' | 'দাম: বেশি থেকে কম'

const sortOptions = [
  {
    value: 'ডিফল্ট',
    label: 'ডিফল্ট',
  },
  {
    value: 'দাম: কম থেকে বেশি',
    label: 'দাম: কম থেকে বেশি',
  },
  {
    value: 'দাম: বেশি থেকে কম',
    label: 'দাম: বেশি থেকে কম',
  },
]

// Product Interface
interface ProductSortProps {
  allProducts: Product[]
  title?: string
  description?: string
}

const ProductSort = ({ allProducts, title, description }: ProductSortProps) => {
  const [sortBy, setSortBy] = useState<ProductSortOption>('ডিফল্ট')

  // Sort products
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

  // Handle sort change
  const handleSortChange = (value: Key | null) => {
    if (value) {
      setSortBy(value as ProductSortOption)
    }
  }

  return (
    <div id='সব_পণ্য' className='mx-auto mt-10 max-w-7xl px-3 lg:px-0'>
      <div className='flex flex-col items-start lg:items-center justify-between gap-4 px-3 md:flex-row lg:px-0'>
        {/* Section Info */}
        <div>
          {title && (
            <h2 className='text-lg font-bold text-gray-900 md:text-xl'>
              {title}
            </h2>
          )}

          <p className='text-sm text-[#5A6762] lg:text-base'>
            {description ||
              `মোট ${banglaNumber(allProducts.length)} টি পণ্য দেখানো হচ্ছে`}
          </p>
        </div>

        {/* Sort */}
        <Select
          className='w-[256px]'
          placeholder='ডিফল্ট'
          value={sortBy}
          onChange={handleSortChange}
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

      {/* Products */}
      <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
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
