import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
})

export const metadata = {
  title: 'Sparsh Joshi — Developer Portfolio',
  description: 'Full-Stack Developer & AI/ML Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} font-body bg-[#050B18] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
