import { Card, Chip } from '@heroui/react'

import { Product } from '@/types/productTypes'
import { banglaNumber, getUnitLabel } from '@/utils/unitLabel'
import { Triangle } from 'lucide-react'

interface PriceCardProps {
  product: Product
  trend?: 'up' | 'down' | 'flat'
}

const PriceCard = ({ product, trend }: PriceCardProps) => {
  return (
    <Card className='border border-transparent select-none cursor-pointer  p-4 transition-colors duration-300 hover:border-[#16A34A] hover:cursor-'>
      {/* Product Info */}
      <div className='flex items-center gap-4'>
        <div className='text-4xl'>
          <span className='rounded-2xl bg-[#EDF5F1] px-1'>{product.image}</span>
        </div>

        <Card.Header>
          <Card.Title className='text-base font-bold'>
            {product.nameBn}
          </Card.Title>

          <Card.Description>{getUnitLabel(product.unit)}</Card.Description>
        </Card.Header>
      </div>

      {/* Price Info */}
      <div className='mt-4 flex items-end justify-between gap-4'>
        <Card.Header>
          <Card.Title className='text-xs font-normal'>আজকের দাম</Card.Title>

          <Card.Description className='text-xl font-bold text-black'>
            {banglaNumber(product.today)}{' '}
            <span className='text-sm font-normal'>টাকা</span>
          </Card.Description>
        </Card.Header>

        <Chip
          color={
            trend === 'up' ? 'success' : trend === 'down' ? 'danger' : 'default'
          }
          className={
            trend === 'up'
              ? 'text-sm font-semibold text-red-600 '
              : trend === 'down'
                ? 'text-sm font-semibold text-green-600'
                : 'text-sm font-semibold text-gray-500'
          }
        >
          {trend === 'up' && (
            <Triangle
              size={10}
              className='rotate-0 fill-red-500 text-red-500 '
            />
          )}
          {trend === 'down' && (
            <Triangle
              size={10}
              className=' fill-green-600 text-green-600 rotate-180'
            />
          )}
          {trend === 'flat' && '—'}
          {'  '}
          {banglaNumber(Math.abs(product.change.pct))}%
        </Chip>
      </div>
    </Card>
  )
}

export default PriceCard
