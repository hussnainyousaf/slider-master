import React, { Component } from 'react'
import {Hcontainer,HeroContent,HeroH1,H2,Wrapper,Column1,Column2} from './ExampledeliverablesElements';

export default class Exampledeliverables extends Component {
    render() {
        return (
            <>
              <Hcontainer>
              <HeroContent>
             <HeroH1>Example Deliveralbes</HeroH1> 
             </HeroContent>
             <H2>
             Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TruePlan)
             </H2>
             <Wrapper>
                 <Column1>
                 <iframe width="100%" height="480" src="https://my.matterport.com/show/?m=e5Wxtu8Arbx" loading="lazy" allowFullScreen allow="vr">

                 </iframe>
                 
                 </Column1>
               <Column2>
               <iframe width ="100%" height="480" src="https://my.matterport.com/show/?m=DhqzGgT7M1E" loading="lazy" allowFullScreen allow="vr">
                   
               </iframe>
               </Column2>
                 
             </Wrapper>
              </Hcontainer>  
            </>
        )
    }
}
