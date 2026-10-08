import { Product } from '@/types/productTypes'
import { banglaNumber } from '@/utils/unitLabel'
import { Triangle } from 'lucide-react'
import MarqueeText from 'react-marquee-text'

interface PriceTickerProps {
  priceTicker: Product[]
}

const MarqueeList = ({ priceTicker }: PriceTickerProps) => {
  return (
    <div className='overflow-hidden py-2'>
      <MarqueeText direction='right' duration={5}>
        <ul className='flex items-center gap-6 whitespace-nowrap'>
          {priceTicker.map((item) => (
            <li
              key={item.slug}
              className='shrink-0 border-r border-neutral-200 pr-4'
            >
              <div className='flex items-center gap-1 text-sm'>
                <span>{item.image}</span>

                <div className='flex items-center gap-3 text-gray-700 font-normal'>
                  <span>{item.nameBn}</span>
                  <span>{banglaNumber(item.today)} টাকা/কেজি</span>

                  <span>
                    {item.change.dir === 'up' ? (
                      <span className='flex items-center gap-1 rounded-full px-2 py-1 font-medium text-red-700'>
                        <Triangle size={14} fill='red' />{' '}
                        {banglaNumber(Math.abs(item.change.pct))} %
                      </span>
                    ) : (
                      <span className='flex items-center gap-1 rounded-full  font-medium px-2 py-1 text-green-700'>
                        <Triangle size={14} fill='green' />{' '}
                        {banglaNumber(Math.abs(item.change.pct))} %
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </MarqueeText>
    </div>
  )
}

export default MarqueeList
//   <Triangle size={14} />
//<Triangle size={14} className='rotate-180' />
