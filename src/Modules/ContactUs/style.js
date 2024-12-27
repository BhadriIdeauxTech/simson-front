import { Button } from "antd";
import { styled } from "styled-components";
import Bgimg from '../../Assets/Images/Contactus/Contactus_Boy.png'
import BgimgInstagram from '../../Assets/Images/Contactus/Instagram_Back.png'

export const StyledBoy = styled.div`

background-image: url(${Bgimg});
/* height: 100vh; */
background-color: #878787;
width: 100%;
padding: 250px 0;
background-repeat: no-repeat;
/* background-size: cover; */
background-position: center center;

& p{
    color: white;
    font-size: 50px;
    font-weight: 500;
    top: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding:30px;
    text-align: center;
   
@media screen and (max-width: 768px){
    font-size: 25px;  
}

}
`

export const StyledContactus = styled.div`

text-align: center;
color: #121212;
padding-top: 70px;
& h1{
    color: #121212;
    font-size: 21px;
};

& p{
    color:#666666;
    padding: 2rem;
    line-height: 2rem;
};

@media screen and (max-width:768px) {
    padding-top: 20px !important;
}
`

export const InstagramButton = styled(Button)`

height: 50px;
background: #F43434;
color: white;
text-align: center;

.ant-btn-default:not(:disabled):hover {
    color: black;
    border-color: #4096ff;
}

`

export const StyledMap = styled.div`

display: flex;
justify-content: center;

/* padding-top: 140px; */
/* margin-top: 140px; */

@media screen and (max-width:768px){
    padding-top: 0px !important;
    margin-top  :0px !important ;
}

`
export const StyledContact = styled.div`

padding-top: 25px;

& button{
    width: 300px;
height: 50px;
background: #F43434;
color: white;
text-align: center;
}


`

export const StyledLinks = styled.div`

width: 100%;
/* margin-top: 50px; */
padding-top: 35px;
text-align: center;
.facebook{
    padding-top: 100px;
};

& .twitter{
    padding: 20px;
}

& .facebook1{
    margin-top: 100px;
};

.twitter1{
    padding: 20px;
}
.facebook2{
    padding: 30px;
    margin-top: 100px;
};

.twitter2{
    padding: 20px;
}

@media screen and (max-width:768px) {
    padding-top: 0px !important;
    margin-top: 30px !important;
}
`

export const StyledInstagram = styled.div`


background-image: url(${BgimgInstagram});
padding: 150px 0;
width: 100%;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;

& button{

width: 250px;
height: 50px;
background: #F43434;
color: white;
border: 0px;
};

& div{
    display: flex;
    justify-content: center !important;;
    align-items: center !important;
    height: 100%;

    @media screen and (max-width: 768px) {
        /* height: 100vh; */
    }
}

`
