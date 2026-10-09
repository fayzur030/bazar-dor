import { Product } from '@/types/productTypes'
import { banglaNumber, getUnitLabel, getUnitName } from '@/utils/unitLabel'
import { Card } from '@heroui/react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import ProductSummary from './ProductSummary'
interface ProductDetailsProps {
  product: Product | null
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className='max-w-7xl mx-auto mt-2 px-3 lg:px-0'>
      {/* Breadcrumb Navigation */}
      <div className='flex items-center gap-1 text-sm'>
        <Link href='/' className='flex items-center hover:underline'>
          <span>হোম</span>
          <ChevronRight size={14} />
        </Link>

        {product && (
          <>
            <Link
              href={`/categories/${product.category}`}
              className='flex items-center hover:underline'
            >
              <span>{product.categoryNameBn}</span>
              <ChevronRight size={14} />
            </Link>

            <span>{product.nameBn}</span>
          </>
        )}
      </div>
      {/* Top Card */}

      <div>
        <Card className='mt-6 w-full rounded-lg p-6 sm:p-8'>
          <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            {/* Left Side */}
            <div className='flex min-w-0 flex-1 items-start gap-5'>
              {/* Category Icon */}
              <div className='flex shrink-0 items-center justify-center rounded-md bg-[#EDF5F1] p-5 text-4xl'>
                {product?.image}
              </div>

              {/* Product Info */}
              <div className='flex min-w-0 flex-1 flex-col gap-3'>
                <Card.Header className='gap-2'>
                  <Card.Title className='text-xl font-bold sm:text-2xl'>
                    {product?.nameBn}
                  </Card.Title>

                  <Card.Description className='text-sm sm:text-base'>
                    {getUnitLabel(product?.unit as string)} ·{' '}
                    {product?.categoryNameBn}
                  </Card.Description>

                  <Card.Description className='text-sm sm:text-base'>
                    গতকালের তুলনায় আজ দাম{' '}
                    <span className='font-semibold text-[#5A6762]'>
                      {product?.change.dir === 'up'
                        ? 'বেড়েছে'
                        : product?.change.dir === 'down'
                          ? 'কমেছে'
                          : 'অপরিবর্তিত আছে'}
                    </span>{' '}
                    {banglaNumber(Math.abs(product?.change.pct as number))}%
                  </Card.Description>
                </Card.Header>
              </div>
            </div>

            {/* Right Side */}
            <div className='flex min-w-40 flex-col items-center justify-center rounded-lg bg-[#EDF5F1] px-8 py-5'>
              <p className='text-sm font-medium text-[#5A6762]'>আজকের দাম</p>

              <p className='mt-1'>
                <span className='text-3xl font-bold text-black'>
                  {banglaNumber(product?.today ?? 0)}
                </span>
              </p>

              <p className='mt-1 text-sm text-[#5A6762]'>
                টাকা / {product?.unit && getUnitName(product.unit)}
              </p>

              {product?.change && (
                <p
                  className={`mt-1 text-sm font-medium ${
                    product.change.dir === 'up'
                      ? 'text-red-600'
                      : product.change.dir === 'down'
                        ? 'text-green-600'
                        : 'text-[#5A6762]'
                  }`}
                >
                  {product.change.dir === 'up'
                    ? '▲'
                    : product.change.dir === 'down'
                      ? '▼'
                      : '—'}{' '}
                  {banglaNumber(
                    Math.abs(product.change.pct).toFixed(1) as string
                  )}
                  %
                  {/* {banglaNumber(Number(Math.abs(product.change.pct).toFixed(1)))}% */}
                </p>
              )}
            </div>
          </div>
        </Card>
      </div>
      {/* Product Summary */}
      <div className='mt-9'>
        <ProductSummary product={product} />
      </div>
    </div>
  )
}

export default ProductDetails
