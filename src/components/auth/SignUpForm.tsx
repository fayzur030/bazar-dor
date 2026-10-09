'use client'

import { authClient } from '@/lib/auth-client'
import {
  Button,
  //   Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  Spinner,
  TextField,
  toast,
} from '@heroui/react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type SignFormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const SignUpForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // Form submit
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const userData = Object.fromEntries(formData.entries()) as SignFormData

    if (userData.password !== userData.confirmPassword) {
      toast.danger('পাসওয়ার্ড দুটি মিলছে না। অনুগ্রহ করে আবার চেষ্টা করুন!')
      return
    }

    setIsLoading(true)

    try {
      const { error } = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      })

      if (error) {
        toast.danger(error.message)
        return
      }

      toast.success('রেজিস্ট্রেশন সফল হয়েছে!')
      router.push('/sign-in')
    } catch (error) {
      console.error(error)
      toast.danger('রেজিস্ট্রেশন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className='flex flex-col space-y-6 items-center justify-center h-screen px-3 lg:px-0'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>অ্যাকাউন্ট তৈরি করুন</h1>
          <p className='mt-1 text-sm text-gray-500'>
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>
        <Form
          onSubmit={onSubmit}
          className='flex flex-col gap-4 border p-6 rounded-lg bg-white'
        >
          <TextField name='name' type='name' isRequired>
            <Label>নাম</Label>
            <Input
              name='name'
              placeholder='যেমন: রহিম উদ্দিন'
              className='border border-gray-200 rounded-md w-full md:w-90 shadow-none py-2.5'
            />
            <FieldError />
          </TextField>
          {/* ইমেইল */}
          <TextField
            isRequired
            name='email'
            type='email'
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address'
              }
              return null
            }}
          >
            <Label>ইমেইল</Label>
            <Input
              placeholder='you@example.com'
              className='border border-gray-200 rounded-md w-full md:w-90 shadow-none py-2.5'
            />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name='password'
            type='password'
            validate={(value) => {
              if (value.length < 8) {
                return 'Password must be at least 8 characters'
              }
              if (!/[A-Z]/.test(value)) {
                return 'Password must contain at least one uppercase letter'
              }
              if (!/[0-9]/.test(value)) {
                return 'Password must contain at least one number'
              }
              return null
            }}
          >
            <Label>পাসওয়ার্ড</Label>
            <Input
              placeholder='কমপক্ষে ৮ অক্ষর'
              className='border border-gray-200 rounded-md w-full md:w-90 shadow-none py-2.5'
            />
            {/* <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description> */}
            <FieldError />
          </TextField>
          {/* পাসওয়ার্ড নিশ্চিত করুন */}
          {/* পাসওয়ার্ড নিশ্চিত করুন */}
          <TextField
            isRequired
            name='confirmPassword'
            type='password'
            validate={(value) => {
              if (!value) {
                return 'Please confirm your password'
              }

              if (value.length < 8) {
                return 'Password must be at least 8 characters'
              }

              if (!/[A-Z]/.test(value)) {
                return 'Password must contain at least one uppercase letter'
              }

              if (!/[0-9]/.test(value)) {
                return 'Password must contain at least one number'
              }

              return null
            }}
          >
            <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
            <Input
              placeholder='আবার লিখুন'
              className='border border-gray-200 rounded-md w-full md:w-90 shadow-none py-2.5'
            />
            <FieldError />
          </TextField>
          <div className='flex gap-2 w-full'>
            <Button
              type='submit'
              className='w-full rounded-md bg-[#047F39] text-white'
              isPending={isLoading}
              isDisabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner size='sm' color='current' />
                  অ্যাকাউন্ট তৈরি হচ্ছে...
                </>
              ) : (
                'অ্যাকাউন্ট তৈরি করুন'
              )}
            </Button>
          </div>
          <div className='flex items-center gap-3'>
            <Separator variant='secondary' className='flex-1' />
            <span className='shrink-0 text-sm text-gray-500'>অথবা</span>
            <Separator variant='secondary' className='flex-1' />
          </div>
          {/* Socil SignUp */}
          <div className='grid grid-cols-2 gap-3'>
            {/* Google */}
            <button
              type='button'
              className='flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 cursor-pointer'
            >
              <svg viewBox='0 0 24 24' className='h-5 w-5' aria-hidden='true'>
                <path
                  fill='#4285F4'
                  d='M23.49 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h6.45a5.51 5.51 0 0 1-2.39 3.62v3.01h3.87c2.27-2.09 3.56-5.17 3.56-8.66Z'
                />
                <path
                  fill='#34A853'
                  d='M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3.01c-1.07.72-2.43 1.15-4.06 1.15-3.13 0-5.79-2.11-6.74-4.95H1.26v3.1A12 12 0 0 0 12 24Z'
                />
                <path
                  fill='#FBBC05'
                  d='M5.26 14.28A7.2 7.2 0 0 1 4.88 12c0-.79.14-1.56.38-2.28V6.62H1.26A12 12 0 0 0 0 12c0 1.94.46 3.78 1.26 5.38l4-3.1Z'
                />
                <path
                  fill='#EA4335'
                  d='M12 4.77c1.76 0 3.34.61 4.58 1.8l3.43-3.43C17.95 1.16 15.24 0 12 0A12 12 0 0 0 1.26 6.62l4 3.1c.95-2.84 3.61-4.95 6.74-4.95Z'
                />
              </svg>
              Google দিয়ে চালিয়ে যান
            </button>

            {/* GitHub */}
            <button
              type='button'
              className='flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 cursor-pointer'
            >
              <svg
                viewBox='0 0 24 24'
                className='h-5 w-5 fill-gray-900'
                aria-hidden='true'
              >
                <path d='M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.47 11.47 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.76.84 1.22 1.91 1.22 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z' />
              </svg>
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>
          <p className='mt-4 text-center text-sm text-gray-500'>
            অ্যাকাউন্ট আছে?{' '}
            <Link
              href='/sign-in'
              className='font-semibold text-green-600 hover:text-green-800 hover:underline'
            >
              সাইন ইন করুন
            </Link>
          </p>
        </Form>

        <Link
          href={'/'}
          className='text-gray-500 text-base flex items-center gap-1 underline hover:text-gray-700'
        >
          <ArrowLeft size={14} /> হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  )
}

export default SignUpForm
