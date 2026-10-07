import Link from 'next/link'

const UserInfo = () => {
  return (
    <div className='flex items-center gap-4'>
      <Link
        href='/sign-in'
        className='text-sm font-medium text-gray-700 transition-colors hover:text-green-600'
      >
        সাইন ইন
      </Link>

      <Link
        href='/sign-up'
        className='rounded-lg bg-[#16A34A] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition duration-300 hover:bg-green-700 hidden lg:block'
      >
        সাইন আপ
      </Link>
    </div>
  )
}

export default UserInfo
