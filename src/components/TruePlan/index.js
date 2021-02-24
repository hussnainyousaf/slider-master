import React from 'react'
import {Hcontainer} from './TrueplanElements'
import imageData from './imagedata'
import './app.css'


const TruePlan = () => {
    return (
        <>
            <Hcontainer>
                <h1 className='heading'>TruePlan [SKX]</h1>
            <div>
            {imageData.map((slide,index)=>{
                return<img height="450px" width="450px" src={slide.image} className="img" alt='docs image'/>
            })}
            </div>
            
            </Hcontainer>
        </>
    )
}

export default TruePlan
