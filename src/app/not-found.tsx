import Link from 'next/link'

const NotFound = () => {
  return (
    <main className='flex min-h-[70vh] items-center justify-center px-4'>
      <div className='w-full max-w-xl text-center'>
        <p className='text-3xl font-black tracking-tight text-gray-900 sm:text-4xl'>
          ৪০৪
        </p>

        <h1 className='mt-4 text-xl font-bold text-gray-900 sm:text-2xl'>
          দুঃখিত, পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className='mx-auto mt-4 max-w-md text-base leading-5 text-gray-500'>
          আপনি যে সংবাদ বা পৃষ্ঠাটি খুঁজছেন সেটি হয়তো সরিয়ে দেওয়া হয়েছে,
          পরিবর্তন করা হয়েছে অথবা বর্তমানে পাওয়া যাচ্ছে না।
        </p>

        <Link
          href='/'
          className='mt-7 inline-flex rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#FF0000]'
        >
          হোমপেজে ফিরে যান
        </Link>
      </div>
    </main>
  )
}

export default NotFound
