import About from './_components/About'
import Contact from './_components/Contact'
import Footer from '@/components/Footer'
import Gallery from './_components/Gallery'
import Hero from './_components/Hero'
import JollofRice from './_components/JollofRice'
import Menu from './_components/Menu'
import Services from './_components/Services'

const Home = () => {
  return (
    <div className='relative'>
      <Hero />
      <JollofRice />
      <About />
      <Services />
      <Gallery />
      <Menu />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

