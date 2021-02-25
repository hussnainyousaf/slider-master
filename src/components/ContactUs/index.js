import React from 'react'
import {  MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import {Recaptcha,Hcontainer,HeroContent,HeroH1,Wrapper,Message,Name,Email,Cell,Button} from './ContactusElements'
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
                 <Recaptcha>
<iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lc46PQUAAAAAMEJkx-a4pfm2t5DMXhlV0Xaaix2&co=aHR0cHM6Ly9tcGFydGlhbC5pbzo0NDM.&hl=en&type=image&v=jxFQ7RQ9s9HTGKeWcoa6UQdD&theme=light&size=normal&badge=bottomright&cb=9u3syi4tn3pr" scrolling="no" className="captcha"></iframe>
                 </Recaptcha>
                 <Button>
                     <button className="bttnn" disabled>Submit</button>
                 </Button>
            </Wrapper>
   
                      
             
          </Hcontainer>  
        </>
    )
}

export default ContactUs

