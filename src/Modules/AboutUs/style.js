import { styled } from "styled-components";

export const StyledAboutus = styled.div`

text-align: center;
color: #000000;
padding-top: 50px;
margin: auto;
padding: 30px;


& h1{
    font-size: 32px;
};
& p{
    font-size: 24px;
    padding: 1rem;
    margin-top: 10px;

    @media screen and (max-width: 768px){
        font-size: 16px;
        padding: 0rem !important;
    }
}

@media screen and (max-width: 768px) {
    padding-top: 20px !important;
   
}
`
export const SmallBar = styled.div`

height: 3px;
width: 75px;
background: #F43434;
order: 1;
margin: auto;

`