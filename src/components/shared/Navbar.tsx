import { Category } from '@/types/categoryTypes'

interface NavItemsProps {
  navItems: Category[]
}

const Navbar = ({ navItems }: NavItemsProps) => {
  return (
    <div className='mx-auto  max-w-7xl px-4 py-4 border-b border-neutral-100'>
      <nav className='overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
        <ul className='flex w-max min-w-full items-center justify-start gap-8 whitespace-nowrap'>
          {navItems.map((item) => (
            <li
              key={item.slug}
              className='flex shrink-0 items-center gap-1 cursor-pointer'
            >
              <span>{item.icon}</span>
              <span className='text-xs font-bold'>{item.nameBn}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
