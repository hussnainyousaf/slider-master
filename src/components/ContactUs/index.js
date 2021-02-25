import React from 'react'
import {Recaptcha,Hcontainer,HeroContent,HeroH1,Wrapper,Message,Name,Email,Cell,Button,Footer,Para,Social,Fb,Insta,Linkd} from './ContactusElements'
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
                 <Footer>
                     <Para className="para">
                     mpartial, a 4D Schematics Company. Copyright 2020 all rights reserved.
                     </Para>
                     <Social>
                         <Fb>
                         <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS40MzIiIGhlaWdodD0iMjEuMTQ2IiB2aWV3Qm94PSIwIDAgMTEuNDMyIDIxLjE0NiI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGU+LmF7ZmlsbDojOWRiOWMzO308L3N0eWxlPgogICAgPC9kZWZzPgogICAgPHBhdGggY2xhc3M9ImEiIGQ9Ik0zMy4wNzksMCwzMC4zMzcsMGMtMy4wODEsMC01LjA3MiwyLjA0My01LjA3Miw1LjJWNy42SDIyLjUwOGEuNDMxLjQzMSwwLDAsMC0uNDMxLjQzMXYzLjQ3NmEuNDMxLjQzMSwwLDAsMCwuNDMxLjQzMWgyLjc1N3Y4Ljc3MmEuNDMxLjQzMSwwLDAsMCwuNDMxLjQzMWgzLjZhLjQzMS40MzEsMCwwLDAsLjQzMS0uNDMxVjExLjk0MmgzLjIyNGEuNDMxLjQzMSwwLDAsMCwuNDMxLS40MzFWOC4wMzVBLjQzMS40MzEsMCwwLDAsMzIuOTUsNy42SDI5LjcyNVY1LjU2OWMwLS45NzguMjMzLTEuNDc0LDEuNTA2LTEuNDc0aDEuODQ3YS40MzEuNDMxLDAsMCwwLC40MzEtLjQzMVYuNDM2QS40MzEuNDMxLDAsMCwwLDMzLjA3OSwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjA3NykiIC8+Cjwvc3ZnPg=="></img>
                         </Fb>
                         <Insta>
                         <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi41MjgiIGhlaWdodD0iMjIuNTMzIiB2aWV3Qm94PSIwIDAgMjIuNTI4IDIyLjUzMyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzlkYjljMzt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yMi45Miw2LjYyNUE4LjIzNCw4LjIzNCwwLDAsMCwyMi40LDMuODkxYTUuNzcyLDUuNzcyLDAsMCwwLTMuMy0zLjNBOC4yNTUsOC4yNTUsMCwwLDAsMTYuMzY2LjA3MUMxNS4xNTkuMDEzLDE0Ljc3NiwwLDExLjcxNywwUzguMjc1LjAxMyw3LjA3My4wNjZBOC4yMzYsOC4yMzYsMCwwLDAsNC4zNC41OWE1LjUsNS41LDAsMCwwLTIsMS4zLDUuNTQ4LDUuNTQ4LDAsMCwwLTEuMywxLjk5NEE4LjI1Niw4LjI1NiwwLDAsMCwuNTE5LDYuNjJDLjQ2Miw3LjgyNi40NDksOC4yMDkuNDQ5LDExLjI2OXMuMDEzLDMuNDQyLjA2Niw0LjY0NGE4LjIzMyw4LjIzMywwLDAsMCwuNTI0LDIuNzM0LDUuNzcxLDUuNzcxLDAsMCwwLDMuMywzLjMsOC4yNTYsOC4yNTYsMCwwLDAsMi43MzQuNTI0YzEuMi4wNTMsMS41ODUuMDY2LDQuNjQ0LjA2NnMzLjQ0Mi0uMDEzLDQuNjQ0LS4wNjZhOC4yMzEsOC4yMzEsMCwwLDAsMi43MzMtLjUyNCw1Ljc2Myw1Ljc2MywwLDAsMCwzLjMtMy4zLDguMjYxLDguMjYxLDAsMCwwLC41MjQtMi43MzRjLjA1My0xLjIuMDY2LTEuNTg1LjA2Ni00LjY0NHMwLTMuNDQyLS4wNTctNC42NDRabS0yLjAyOSw5LjJhNi4xNzYsNi4xNzYsMCwwLDEtLjM4NywyLjA5MSwzLjczOCwzLjczOCwwLDAsMS0yLjEzOSwyLjEzOSw2LjIsNi4yLDAsMCwxLTIuMDkxLjM4N2MtMS4xODguMDUzLTEuNTQ1LjA2Ni00LjU1MS4wNjZzLTMuMzY3LS4wMTMtNC41NTItLjA2NmE2LjE3Myw2LjE3MywwLDAsMS0yLjA5MS0uMzg3LDMuNDY3LDMuNDY3LDAsMCwxLTEuMjk0LS44NDEsMy41LDMuNSwwLDAsMS0uODQxLTEuMjk0LDYuMiw2LjIsMCwwLDEtLjM4Ny0yLjA5MWMtLjA1My0xLjE4OC0uMDY2LTEuNTQ1LS4wNjYtNC41NTJTMi41LDcuOTEsMi41NTcsNi43MjZhNi4xNzMsNi4xNzMsMCwwLDEsLjM4Ny0yLjA5MUEzLjQyNSwzLjQyNSwwLDAsMSwzLjc5LDMuMzQxLDMuNSwzLjUsMCwwLDEsNS4wODQsMi41YTYuMiw2LjIsMCwwLDEsMi4wOTEtLjM4N2MxLjE4OC0uMDUzLDEuNTQ1LS4wNjYsNC41NTEtLjA2NnMzLjM2Ny4wMTMsNC41NTIuMDY2YTYuMTc2LDYuMTc2LDAsMCwxLDIuMDkxLjM4NywzLjQ2NSwzLjQ2NSwwLDAsMSwxLjI5NC44NDFBMy41LDMuNSwwLDAsMSwyMC41LDQuNjM1YTYuMiw2LjIsMCwwLDEsLjM4NywyLjA5MWMuMDUzLDEuMTg4LjA2NiwxLjU0NS4wNjYsNC41NTFzLS4wMTMsMy4zNTktLjA2Niw0LjU0N1ptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NDkgMCkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTEzMC43MzcsMTI0LjVhNS43ODgsNS43ODgsMCwxLDAsNS43ODgsNS43ODhBNS43OSw1Ljc5LDAsMCwwLDEzMC43MzcsMTI0LjVabTAsOS41NDNhMy43NTUsMy43NTUsMCwxLDEsMy43NTUtMy43NTVBMy43NTUsMy43NTUsMCwwLDEsMTMwLjczNywxMzQuMDQzWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTkuNDY5IC0xMTkuMDIpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0zNjUuMTUzLDg5Ljk1M0ExLjM1MSwxLjM1MSwwLDEsMSwzNjMuOCw4OC42LDEuMzUxLDEuMzUxLDAsMCwxLDM2NS4xNTMsODkuOTUzWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDYuNTE1IC04NC43MDIpIi8+PC9zdmc+"></img>
                         </Insta>
                         <Linkd>
                         <img width="20px" height="20px" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlPi5he2ZpbGw6IzlkYjljMzt9PC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxwYXRoIGNsYXNzPSJhIiBkPSJtNDc1LjA3NDIxOSAwaC00MzguMTQ4NDM4Yy0yMC4zOTQ1MzEgMC0zNi45MjU3ODEgMTYuNTMxMjUtMzYuOTI1NzgxIDM2LjkyNTc4MXY0MzguMTQ4NDM4YzAgMjAuMzk0NTMxIDE2LjUzMTI1IDM2LjkyNTc4MSAzNi45MjU3ODEgMzYuOTI1NzgxaDQzOC4xNDg0MzhjMjAuMzk0NTMxIDAgMzYuOTI1NzgxLTE2LjUzMTI1IDM2LjkyNTc4MS0zNi45MjU3ODF2LTQzOC4xNDg0MzhjMC0yMC4zOTQ1MzEtMTYuNTMxMjUtMzYuOTI1NzgxLTM2LjkyNTc4MS0zNi45MjU3ODF6bS0yOTMuNDY0ODQ0IDM4N2gtNjIuMzQ3NjU2di0xODcuNTc0MjE5aDYyLjM0NzY1NnptLTMxLjE3MTg3NS0yMTMuMTg3NWgtLjQwNjI1Yy0yMC45MjE4NzUgMC0zNC40NTMxMjUtMTQuNDAyMzQ0LTM0LjQ1MzEyNS0zMi40MDIzNDQgMC0xOC40MDYyNSAxMy45NDUzMTMtMzIuNDEwMTU2IDM1LjI3MzQzNy0zMi40MTAxNTYgMjEuMzI4MTI2IDAgMzQuNDUzMTI2IDE0LjAwMzkwNiAzNC44NTkzNzYgMzIuNDEwMTU2IDAgMTgtMTMuNTMxMjUgMzIuNDAyMzQ0LTM1LjI3MzQzOCAzMi40MDIzNDR6bTI1NS45ODQzNzUgMjEzLjE4NzVoLTYyLjMzOTg0NHYtMTAwLjM0NzY1NmMwLTI1LjIxODc1LTkuMDI3MzQzLTQyLjQxNzk2OS0zMS41ODU5MzctNDIuNDE3OTY5LTE3LjIyMjY1NiAwLTI3LjQ4MDQ2OSAxMS42MDE1NjMtMzEuOTg4MjgyIDIyLjgwMDc4MS0xLjY0ODQzNyA0LjAwNzgxMy0yLjA1MDc4MSA5LjYwOTM3NS0yLjA1MDc4MSAxNS4yMTQ4NDR2MTA0Ljc1aC02Mi4zNDM3NXMuODE2NDA3LTE2OS45NzY1NjIgMC0xODcuNTc0MjE5aDYyLjM0Mzc1djI2LjU1ODU5NGM4LjI4NTE1Ny0xMi43ODEyNSAyMy4xMDkzNzUtMzAuOTYwOTM3IDU2LjE4NzUtMzAuOTYwOTM3IDQxLjAxOTUzMSAwIDcxLjc3NzM0NCAyNi44MDg1OTMgNzEuNzc3MzQ0IDg0LjQyMTg3NHptMCAwIiAvPgo8L3N2Zz4="></img>
                         </Linkd>
                             

                         
                     </Social>

                 </Footer>
            </Wrapper>
   
                      
             
          </Hcontainer>  
        </>
    )
}

export default ContactUs

