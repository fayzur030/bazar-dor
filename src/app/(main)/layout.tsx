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

      <Suspense fallback={<div className='h-12 border-b bg-white' />}>
        <CategoryNavbar />
      </Suspense>

      <main>{children}</main>
    </>
  )
}
