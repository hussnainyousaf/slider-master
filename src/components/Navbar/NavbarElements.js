import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
//background: white;
box-shadow:0 3px 1rem rgba(0,0,0,.1);
height:57px;
//margin-top: -80px;
display: flex;
justify-content:center;
align-items: center;
font-size:1rem;
position: sticky;
top:0;
z-index:10;
border-bottom:0.01rem solid white;

&.active{
    background: white;
    transition:0.8s;

}




@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index:1;
width: 100%;
padding:0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
color: #3ac280;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items:center;
margin-left:-20px;
//margin-right:1rem;
font-weight:bold;
text-decoration:none;
`;

export const MobileIcon = styled.div`
display:none;
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    //color: #fff;
    color: black;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style:none;
text-align:center;
margin-right:-22px;
font-size: 12px;


@media screen and (max-width: 768px) {
    display: none;
}
`
export const NavItem = styled.li`
//height: 30px;
`
export const NavLinks = styled(LinkS)`
color:white;
//color:black;
display: flex;
align-items: center;
text-decoration:none;
padding:0 0.7rem;
//padding:0 2 rem;
height: 100%;
cursor: pointer;
font-family:'Raleway';

&.active {
   // border-bottom: 3px solid #01bf71;
   color: black;
   
}
&:hover {
    transition: all 0.2s ease-in-out;
    //background:#fff;
    color:#3ac280;
}

`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`
export const NavBtnLink = styled(LinkR)`

border-radius: 50px;
//background: #33CC96;
background:#3ac280;
white-space:nowrap;
padding:9px 28px;
color: white;
font-size:12px;
outline: none;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

`