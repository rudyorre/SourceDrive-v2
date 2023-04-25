import Image from 'next/image'
import { Inter } from 'next/font/google'
import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
} from '../components/index'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  )
}
