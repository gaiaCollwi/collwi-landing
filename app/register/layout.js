import { Outfit } from 'next/font/google'
import '../globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export default function RegisterLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans overflow-x-hidden bg-white">
        {children}
      </body>
    </html>
  )
}
