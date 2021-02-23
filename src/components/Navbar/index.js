import React, {useState, useEffect} from 'react'
import {Nav, NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn,NavBtnLink} from './NavbarElements'
import {VideoBg,HeroBg,HeroContent,HeroH1} from '../HeroSection/HeroElements'
import Video from '../../videos/video.mp4'
import {FaBars} from 'react-icons/fa'
import logo from './mpartial.png'

const Navbar = ({toggle}) => {
    const [navbar,setNavbar] = useState(false)
    const changeBackground = () =>{
        if(window.scrollY >= 120) {
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeBackground)
    return (
        
      
        <>

<HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
              
             
        </HeroBg>
     
        <Nav className= {navbar ? 'navbar active' : 'navbar'}>
        
              

     
              
        
        
       



            <NavbarContainer>
                <NavLogo to='/'>
                   <img src={logo} width="220" alt="logo"/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks className={navbar ? 'active' : 'navbar'} to ='about'>Ground-Truth Data</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks className={navbar ? 'active' : 'navbar'} to ='How it works'>How It Works</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks className={navbar ? 'active' : 'navbar'} to ='fee structure'>Fee Structure</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks className={navbar ? 'active' : 'navbar'} to ='example deliverables'>Example Deliverables</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks className={navbar ? 'active' : 'navbar'} to ='submission portal'>Submission Portal</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks className={navbar ? 'active' : 'navbar'} to ='contact us'>Contact Us</NavLinks>
                    </NavItem>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>

                </NavMenu>

           
          
               { /*<NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
               </NavBtn>*/}
            </NavbarContainer>
         
         
            
        </Nav>
      
        <HeroContent>
               <HeroH1>
                   Impartial, Remote, 3rd-Party,<br/>
                   Estimating Engine
                   
                   
               </HeroH1>
           </HeroContent>
       
      

               

       </>
        
      
    )
}

export default Navbar
