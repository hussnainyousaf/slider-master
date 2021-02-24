import React, { Component } from 'react'
import { Hcontainer,HeroContent,HeroH1,Column,Slider,DivButton,Info_popup,Para} from './WaterfallElements'
import './waterFall.css'
import styled from 'styled-components'

const sliderThumbStyles =(props) => (`
width:30px;
height:30px;
background:${props.color};
cursor: pointer;
border-radius: 50%;
border: 5px solid #3ac280;
opacity: ${props.opacity};
-webkit-transition: .2s;
transition: opacity .2s;

`)

const Range= styled.div`
 display:flex;
 align-items:center;
 color:#888;
 margin-top: 2rem;
 margin-bottom:2rem;
 .value{
     flex:1;
     font-size: 2rem;
 }
 .slider{
     flex:6;
     -webkit-appearance:none;
     width:100%;
     width:70rem;
     height:15px;
     border-radius:5px;
     background:#dff1eb;
     outline:none;

     &::-webkit-slider-thumb{
       -webkit-appearance:none;
       appearance:none;
       ${props => sliderThumbStyles(props)}
     }
     &::-moz-range-thumb {
         ${props => sliderThumbStyles(props)}
     }
     .tooltip-inner {
  background-color: #FFF9C4;
  border-radius: 15px;
  color: #000;
  font-weight: bold;
  margin-left: -3.5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
 }
 `
export default class index extends Component {
    state={
        value:50
    }

    handleOnChange =(e) => this.setState({value:e.target.value})
    render() {
        return (
            <>
            <Hcontainer>
            <HeroContent>
             <HeroH1>WaterFall Fee Structure</HeroH1> 
             </HeroContent>
             <Column>
             <Slider>
                 <Range  color={this.props.color}>
                 <input type="range" min={0} max={1000000}  value={this.state.value} className="slider" onChange={this.handleOnChange} />
                 <div id="selector">
                     <div className="SelectBtn"></div>
                     <div id="SelectValue">${this.state.value}</div>
                 </div>
                 <div className="vlaue"></div>
                 
                 </Range>
                 <ul className="waterfall">
                     <li>$500,000</li>
                 </ul>
                 <ul className="waterfalll">
                     <li>$0</li>
                 </ul>
                 <ul className="waterfallll">
                     <li>
                         $250,000
                     </li>
                 </ul>
                 <ul className="waterfalllll">
                     <li>
                         $750,000
                     </li>
                 </ul>
                 <ul className="waterfallllll">
                     <li>
                         $1M+
                     </li>
                 </ul>
                 <p className="para">Drag the slider around based on what you think it will cost to repair the property.<br/>
Move forward based on the estimated fee structure below.</p>

             
             
             </Slider> 
             </Column>
             <DivButton>
                 <Info_popup><i className="ii">i</i></Info_popup>
                 <label className="label">7.22%</label>
                 <span className="fee">mpartial Fee</span>

             </DivButton>
             <Para>
                 [$750 minimun]
             </Para>
            </Hcontainer>  
          </>
        )
    }
}
