import { Hind_Siliguri } from 'next/font/google'
import './globals.css'
import { ToastProvider } from '@heroui/react'

const hindSiliguri = Hind_Siliguri({
  subsets: ['latin', 'bengali'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`${hindSiliguri.className} h-full antialiased`}>
      <body className='min-h-full flex flex-col bg-[#EDF5F1]'>
        <ToastProvider placement='top end' />
        {children}
      </body>
    </html>
  )
}
// Hind siliguri font
