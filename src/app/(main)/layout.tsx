import Marquee from '@/components/Marquee'
import CategoryNavbar from '@/components/shared/CategoryNavbar'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <CategoryNavbar />
      <Marquee />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  )
}

//fallback={<div className='h-12 border-b bg-white' />}
