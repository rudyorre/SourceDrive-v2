import { Html, Head, Main, NextScript } from 'next/document'
import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
} from '../components/index'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
