'use client'
import { authClient } from '@/lib/auth-client'
import { Avatar, Card, toast } from '@heroui/react'
import { useRouter } from 'next/navigation'
import EditProfileCard from './EditProfileCard'

const Profile = () => {
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
    <div className='mx-auto mt-10 max-w-4xl px-4'>
      <div>
        <h1 className='text-2xl font-bold'>আমার প্রোফাইল</h1>
        <p className='text-sm text-gray-500'>
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      <Card className='flex w-full flex-row items-center gap-4 mt-6 rounded-2xl border border-gray-200 bg-[#FAFCFA] p-5 shadow-none'>
        <Avatar
          variant='default'
          color='accent'
          className='size-16 shrink-0 overflow-hidden rounded-2xl bg-gray-100'
        >
          {user?.image && (
            <Avatar.Image
              src={user.image}
              alt={user.name || 'User profile'}
              className='size-full object-cover'
            />
          )}

          <Avatar.Fallback delayMs={0} className='text-lg font-semibold'>
            {user?.name
              ?.trim()
              .split(/\s+/)
              .map((part) => part[0])
              .slice(0, 2)
              .join('')
              .toUpperCase() || 'U'}
          </Avatar.Fallback>
        </Avatar>

        <Card.Header className='min-w-0 flex-1 gap-0 p-0'>
          <Card.Title className='text-lg font-semibold leading-7 text-[#252D27]'>
            {user?.name}
          </Card.Title>

          <Card.Description className='truncate text-sm text-gray-500'>
            {user?.email}
          </Card.Description>
        </Card.Header>

        <button
          onClick={handleSignOut}
          className='shrink-0 rounded-lg border cursor-pointer border-red-500 px-4 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-50'
        >
          ↩ সাইন আউট
        </button>
      </Card>
      {/* 2nd card */}
      <EditProfileCard user={user} />
    </div>
  )
}

export default Profile
