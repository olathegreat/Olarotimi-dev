
import Footer from '@/components/Footer/Footer'
import Nav from '@/components/nav/Nav'
import SideNav from "../components/SideNav/SideNav"

import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
  <>
     <Nav/>
     <Component {...pageProps} />
     <SideNav/>
     <Footer/>
    
  
  </>

  )
}
