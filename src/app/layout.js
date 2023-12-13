import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/util/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EduStreet',
  description: 'E-Learning bla bla bla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
