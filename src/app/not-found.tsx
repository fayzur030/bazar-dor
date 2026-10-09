import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-4 text-center'>
      <h1 className='text-7xl font-bold text-[#047F39]'>404</h1>

      <h2 className='mt-4 text-xl font-semibold text-gray-800'>
        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
      </h2>

      <p className='mt-2 text-sm text-gray-500'>
        দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি।
      </p>

      <Link
        href='/'
        className='mt-6 rounded-lg bg-[#047F39] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-800'
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  )
}

export default NotFound
