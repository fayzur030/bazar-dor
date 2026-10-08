import logo from '@/assets/logo-icon.png'
import Image from 'next/image'
import Link from 'next/link'
import BanglaDate from './BanglaDate'
import UserInfo from '../userInfo/UserInfo'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 border-b border-neutral-100 bg-white py-4'>
      <div className='mx-auto flex max-w-7xl items-center px-4 justify-between'>
        <Link href='/' className='inline-flex items-center'>
          <div className='flex items-center gap-3'>
            <Image
              src={logo}
              alt='Logo'
              width={40}
              height={40}
              className='rounded-xl border border-[#95bba3] bg-green-50 p-2 text-white'
            />

            <div>
              <h1 className='text-base md:text-xl font-extrabold text-[#172721]'>
                বাজার দর
              </h1>
              <div className='text-xs md:text-xs text-[#505856]'>
                <BanglaDate />
              </div>
            </div>
          </div>
        </Link>
        <UserInfo />
      </div>
    </header>
  )
}

export default Header
