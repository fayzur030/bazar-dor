import { Hind_Siliguri } from 'next/font/google'
import './globals.css'

const hindSiliguri = Hind_Siliguri({
  subsets: ['latin', 'bengali'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`${hindSiliguri.className} h-full antialiased`}>
      <body className='min-h-full flex flex-col bg-[#EDF5F1]'>{children}</body>
    </html>
  )
}
// Hind siliguri font
