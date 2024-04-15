import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from "./components/navbar/navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Plover Pond Retreat',
  description: 'next.js react application using tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
