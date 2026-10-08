import Link from 'next/link'
import React from 'react'

const EmptyMessage = () => {
  return (
    <div>
      <div className='flex min-h-[400px] flex-col items-center justify-center px-4 text-center'>
        <h2 className='text-2xl font-bold text-gray-800'>কিছুই পাওয়া যায়নি</h2>

        <p className='mt-3 max-w-md text-sm leading-6 text-gray-500'>
          আপনি যে ক্যাটাগরিটি খুঁজছেন, সেখানে বর্তমানে কোনো পণ্য পাওয়া যাচ্ছে
          না। অন্য কোনো ক্যাটাগরি থেকে পণ্য খুঁজে দেখতে পারেন।
        </p>

        <Link
          href='/'
          className='mt-6 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800'
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
      )
    </div>
  )
}

export default EmptyMessage
