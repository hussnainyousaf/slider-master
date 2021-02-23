import styled from 'styled-components'

export const InfoContainer = styled.div`

color:black;
height:100%;
width:100%;
//position:relative;
//background-color:black;
//background: ${({lightBg}) =>(lightBg ? '#f9f9f9' : '010606')}
;
@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`
export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height:1150px;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
margin-top:40%;
padding:0 24px;
justify-content:center;

`

export const InfoRow = styled.div`
display: grid;

grid-auto-columns: minmax(auto,1fr);
align-items:center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
@media screen and (max-width: 760px){
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
}
`

export const Column1 = styled.div`
//margin-bottom:50px;
position:static;
//padding:0 10px;
margin: -450px 20% 30px 2%;
//border:solid;
//grid-area: col2;
`
export const Column2 = styled.div`
//margin-bottom:50px;
margin: -400px -17% 30px 2px;
padding:0 10px;
//border:solid;
grid-area: col2;
`

export const TextWrapper= styled.div`
max-width: 540px;
padding-top:0;
padding-bottom:60px;
`
export const TopLine = styled.p`
//color:#01bf71;
color:black;
font-size:14px;
line-height:16px;
//font-weight:700;
letter-spacing:1.4px;
line-height:32px;
//text-transform: uppercase;
margin-bottom: 100px;
font-family:'Raleway';
`

export const Heading = styled.h1`
color:black;

margin-bottom:24px;
margin-left:80px;
font-size: 40px;
line-height:1.1;
font-weight:600;
letter-spacing:0px;
line-height:60px;
font-family:'Raleway';
color: ${({lightText}) => (lightText ? '#f7f8fa' : '010606')};

@media screen and (max-width:480px) {
    font-size: 32px;
}

`

export const Subtitle = styled.p`
color:black;
max-width: 440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
color:${({darkText}) => (darkText ? '#010606' : "#fff")};
`

