import React from 'react'
import {  MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import {Hcontainer,HeroContent,HeroH1,Wrapper,Message,Name,Email,Cell} from './ContactusElements'
import './app.css'


const ContactUs = () => {
    return (
        <>
          <Hcontainer>
              <HeroContent>
                  <HeroH1>Contact Us</HeroH1>

              </HeroContent>
           
             <Wrapper>
                 <Message>
                 <form>
                     <textarea className="msg" placeholder="Message">

                     </textarea>
                 </form>

                 </Message>
                 <Name>
                     <input className="name" placeholder="Name"/>

                 </Name>
                 <Email>
                 <input className="email" placeholder="Email"/>
                 </Email>
                 <Cell>
                 <input className="cell" placeholder="Cell"/>
                 </Cell>
            </Wrapper>
   
                      
             
          </Hcontainer>  
        </>
    )
}

export default ContactUs

