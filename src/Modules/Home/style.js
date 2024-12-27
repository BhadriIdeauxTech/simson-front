import { Button } from "antd";
import { styled } from "styled-components";

export const StyledHome = styled.div`

padding-top: 80px;

`
export const StyledButton = styled(Button)`
padding: 7px 35.34px 7px 23px;
width: 189.34px;
height: 42px;
background: #D00000;
color: #ffff;
margin-top:60px;
`

export const StyledHomePage = styled.div`
margin-top:80px;
text-align: end;
padding-right:20px;

& h1{
    font-size: 300%;
};

& p{
    font-size: 1.1rem; 
    font-weight:400;
    color:#666666;
    padding-left: 6%;
    margin-top: 20px;
}

@media screen and (max-width: 768px ){
    margin-top:20px !important;
}
`
export const StyledImage = styled.div`

& img{
    /* max-width: 100%; */
    width: 100%;
/* height:100%; */
@media screen and (max-width:768px){
/* padding-left: 40px; */
}
}

`


