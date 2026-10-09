const Footer = () => {
  return (
    <footer className='border-t border-gray-200 bg-white mt-16'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-3 lg:px-0 py-5 text-center sm:px-6 md:flex-row md:text-left '>
        {/* Left Side */}
        <div>
          <p className='mt-1 text-sm text-gray-600'>
            বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </p>
        </div>

        {/* Right Side */}
        <p className='max-w-md text-xs leading-5 text-gray-500 sm:text-sm md:text-right'>
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  )
}

export default Footer
