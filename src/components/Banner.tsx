import { Chip } from '@heroui/react'
import Image from 'next/image'

import heroImage from '@/assets/bazar-hero.png'
import BanglaDate from './shared/BanglaDate'

const Banner = () => {
  return (
    <section className='mx-3 mt-5 lg:mx-0'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-2xl bg-white px-5 py-8 sm:px-8 md:py-10 lg:flex-row lg:px-10'>
        {/* Content */}
        <div className='w-full lg:max-w-2xl'>
          <Chip
            color='success'
            className='bg-[#D8F1EA] px-3 py-2 text-sm font-semibold text-[#16A34A] sm:text-base'
          >
            <BanglaDate />
          </Chip>

          <div className='mt-5 space-y-4'>
            <h1 className='text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl'>
              আজকের বাজারের দাম এক <br className='hidden sm:block' /> নজরে
            </h1>

            <p className='max-w-xl text-sm leading-7 text-[#5A6762] sm:text-base md:text-lg'>
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <a
              href='#সব_পণ্য'
              className='inline-flex rounded-lg bg-[#16A34A] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-300 hover:bg-green-700'
            >
              সব পণ্য দেখুন
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className='w-full max-w-sm shrink-0 sm:max-w-md lg:max-w-[420px]'>
          <Image
            src={heroImage}
            alt='আজকের বাজারের পণ্যের ছবি'
            width={500}
            height={400}
            priority
            className='h-auto w-full object-contain'
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
