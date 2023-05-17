import '@/styles/globals.css'
import Navbar from '@/sections/Navbar/navbar'
import { Footer } from '@/sections/Footer/footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Navbar/>
      <Footer/>
    </>
  )
}
