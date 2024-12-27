import styled from 'styled-components'
import { Button, Card } from 'antd'

export const FooterHeading = styled.div`

padding: 45px;
text-align: center;
background-color: #D00000;
color: white;
font-size: 36px;

`

export const FooterContent = styled.div`

/* text-align: center; */
padding-top: 50px;
/* position: fixed; */

& h1{
    color: #121212;
text-align: justify;
font-family: Poppins;
font-size: 28px;
font-style: normal;
font-weight: 500;
line-height: 40px; /* 125% */
text-transform: capitalize;

@media screen and (max-width:768px ){
    text-align: center;
}
}

& a{
    color: #666;
font-family: Poppins;
text-align: justify;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 50px; /* 208.333% */

@media screen and (max-width:768px ){
    text-align: center;
}
}


`

export const ContactusButton = styled(Button)`

height:48px ;
width:187px ;
background: #000000;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
margin: auto;
margin-top: 30px;

& p{
    font-size: 14px;
    padding: 0px !important;
    color: #FFFFFF;
    
}

`

export const SmallBoxes = styled.div`

height: 40px;
width: 40px;
background: #989898;
border-radius: 4px;
margin-top: 30px;
`

export const StyledFooter = styled.div`

/* position: fixed;
bottom: 0px; */

`

export const Cardd = styled(Card)`

/* position: fixed; */
    z-index: 999;
    bottom: 0px;
    right: 0;
    left: 0;
    background: white;

    @media screen and (max-width:768px){
        position: relative !important;
    }
& p{
    font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 30px;
letter-spacing: 0.7px;
}

& a{
    color: #D00000;
    text-decoration-line: underline;
    font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 30px;
letter-spacing: 0.7px;
}
`

export const StyledQuote = styled.div`

color: #121212;
display: flex;
height: 120px;
/* flex-direction: column; */
margin-top: 30px;
justify-content: center !important;
flex-shrink: 0;
font-size: 20px;

& span{
    color: #25D366;
}

@media screen and (max-width: 768px){
    justify-content: center !important;
    align-items: center;
    margin-top: 0px !important;
}
`

export const StyledLinks = styled.div`
/* 
text-align: center; */
margin-left: 30px;

@media screen and (max-width:768px) {
    margin-left: 0px !important ;
    text-align: center;
}

`

export const StyledHelp = styled.div`

@media screen and (max-width:768px ){
    text-align: center;
    margin-top: 15px;
}
`

export const StyledRightFooter = styled.div`

display: flex;
justify-content: center;

@media screen and (max-width:768px ){
    margin-top: 15px;
}
`