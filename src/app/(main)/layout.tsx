import Marquee from '@/components/Marquee'
import CategoryNavbar from '@/components/shared/CategoryNavbar'
import Header from '@/components/shared/Header'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <CategoryNavbar />
      <Marquee />
      <main>{children}</main>
    </>
  )
}

//fallback={<div className='h-12 border-b bg-white' />}
