'use client'
import { authClient } from '@/lib/auth-client'

import { Avatar, Dropdown, toast } from '@heroui/react'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const UserInfo = () => {
  const router = useRouter()
  const { data: session } = authClient.useSession()
  const user = session?.user

  // handleSignOut
  const handleSignOut = async () => {
    const { error } = await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/')
        },
      },
    })

    if (error) {
      toast.danger(error.message)
      return
    }

    toast.success('সফলভাবে সাইন আউট করা হয়েছে।')
  }

  return (
    <div>
      {user ? (
        <Dropdown>
          <Dropdown.Trigger className='rounded-md'>
            <Avatar variant='default' color='accent'>
              {user?.image && (
                <Avatar.Image alt={user.name ?? 'User'} src={user.image} />
              )}
              <Avatar.Fallback delayMs={600}>
                {user?.name
                  ?.trim()
                  .split(/\s+/)
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join('')
                  .toUpperCase() || 'U'}
              </Avatar.Fallback>
            </Avatar>
          </Dropdown.Trigger>
          <Dropdown.Popover className='min-w-64'>
            <div className='px-3 pt-3 pb-1'>
              <div className='flex items-center gap-2'>
                <Avatar variant='default' size='sm' color='accent'>
                  <Avatar.Image
                    alt={user?.name ?? 'User'}
                    src={user?.image ?? ''}
                  />
                  <Avatar.Fallback delayMs={600}>
                    {user?.name
                      ?.trim()
                      .split(/\s+/)
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join('')
                      .toUpperCase() || 'U'}
                  </Avatar.Fallback>
                </Avatar>
                <div className='flex flex-col gap-0'>
                  <p className='truncate text-sm leading-5 font-medium'>
                    {user?.name}
                  </p>
                  <p className='truncate text-xs leading-none text-muted'>
                    {user?.email}
                  </p>
                </div>
              </div>
            </div>
            <Dropdown.Menu>
              <Dropdown.Item
                id='profile'
                textValue='Profile'
                className='hover:bg-green-50 hover:text-green-700'
              >
                <Link
                  href='/profile'
                  className='flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium'
                >
                  <User size={16} />
                  <span>আমার প্রোফাইল</span>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item
                id='logout'
                textValue='Logout'
                variant='danger'
                className='text-red-600 transition-colors hover:bg-red-50'
              >
                <button
                  type='button'
                  onClick={handleSignOut}
                  className='flex w-full items-center gap-2 rounded-lg px-3 py-1 text-sm font-medium '
                >
                  <LogOut size={16} />
                  <span>সাইন আউট</span>
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      ) : (
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
      )}
    </div>
  )
}

export default UserInfo
