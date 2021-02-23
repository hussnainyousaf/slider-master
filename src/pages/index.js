import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar/index'
//import HeroSection from '../components/HeroSection/index'
import InfoSection from '../components/InfoSection/index'
import HowItWorks from '../components/HowItWorks/index'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>  
          <InfoSection/>
          

        {/*  <HeroSection/>*/}
        </>
    )
}

export default Home
