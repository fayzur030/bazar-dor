'use client'
import { Category } from '@/types/categoryTypes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemsProps {
  navItems: Category[]
}

const Navbar = ({ navItems }: NavItemsProps) => {
  const pathname = usePathname()
  return (
    <div className='bg-white border-b border-neutral-100'>
      <div className='px-3 md:px-0'>
        <div className='mx-auto max-w-7xl px-4 py-4 '>
          <nav className='overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
            <div className='flex w-max min-w-full items-center justify-start gap-8 whitespace-nowrap'>
              {navItems.map((item) => {
                const active = pathname === `/categories/${item.slug}`
                return (
                  <Link
                    href={`/categories/${item.slug}`}
                    key={item.slug}
                    className={`flex shrink-0 items-center gap-1 cursor-pointer ${active ? 'text-white bg-green-700 px-3.5 py-1 rounded' : 'text-gray-500'}`}
                  >
                    <span>{item.icon}</span>
                    <span className='text-xs font-semibold '>
                      {item.nameBn}
                    </span>
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
