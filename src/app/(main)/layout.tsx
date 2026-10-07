import Marquee from '@/components/Marquee'
import CategoryNavbar from '@/components/shared/CategoryNavbar'
import Header from '@/components/shared/Header'
import { Suspense } from 'react'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <Suspense>
        <CategoryNavbar />
        <Marquee />
      </Suspense>
      <main>{children}</main>
    </>
  )
}

//fallback={<div className='h-12 border-b bg-white' />}
