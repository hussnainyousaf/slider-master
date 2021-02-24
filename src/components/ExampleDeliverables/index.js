import React, { Component,useState } from 'react'
import {Hcontainer,HeroContent,HeroH1,H2,Wrapper,Column1,Column2,Wrapper2,H1,SliderImages,Wrapper3} from './ExampledeliverablesElements';
import {imageData} from './imagedata'
import {FaArrowCircleRight,FaArrowCircleLeft} from 'react-icons/fa'
import './app.css'
const Exampledeliverables =({slides})=> {
     const [current, setCurrent] = useState(0)
     const length= SliderImages.length; 

     const nextSlide = () =>{
         setCurrent(current === length -1 ? 0 : current +1)
     }

     const prevSlide = () => {
         setCurrent(current === 0 ? length - 1 : current - 1)
     }

    // if (!Array.isArray(slides) || slides.length <= 0){
      //   return null;
     //}
    
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
             <Wrapper2>
             <H1>
             Immaculate. Impartial. [ESX]
             </H1>
             <SliderImages>
            <section className="slider">
                <FaArrowCircleLeft className="left-arrow" onClick={prevSlide}/>
                <FaArrowCircleRight className="right-arrow" onClick={nextSlide}/>
                {imageData.map((slide,index)=>{
                return(
                
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                       {index === current &&(<img  src={slide.image} alt='docs image' className="image"/>)}
                        
            

                    </div>
                )

                
            })}
         
            </section>
            </SliderImages>
          
         
             </Wrapper2>
      
       
            
              </Hcontainer>  
            </>
        )
    
}

export default Exampledeliverables;
