import { Button } from "antd";
import { styled } from "styled-components";

export const StyledButton = styled(Button)`
border: 1px solid #D00000;
padding: 20px;
width: 200px;
margin:auto;
font-size:18px;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
.whatsappicon{
color: #25D366;
font-size: 20px;
}

& span{
color: #D00000;
}

&:hover{
background-color : black;
color:white ;
transition: 1s;
cursor: pointer;
.whatsappicon{
color: #25D366;
transition: 1s;

}
};

& div{
   display:flex;
   justify-content: center;
   align-items: center;
}
`
export const StyledImage = styled.div`
 height: 250px;
 width: 180px;

 & img{
   width: 80%;
   height:100%;
   padding:5px;
 }
`

export const StyledHeading = styled.div`
padding: 45px;
text-align: center;
background-color: #D00000;
color: #FFFFFF;
font-size: xx-large;
`
export const StyledSearch = styled.div`

:where(.css-dev-only-do-not-override-12jzuas).ant-btn-primary {
    color: #fff;
    background-color: #D00000 !important;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);

/* 
    & :hover{
  background-color: #fff;
  color: #D00000; */
}
:where(.css-dev-only-do-not-override-12jzuas).ant-btn-primary:not(:disabled):hover {
  
    background-color: #D00000 ;
    /* color:blue; */
}


`

export const StyledPagination = styled.div`

.ant-pagination-item-active a {
    color: #D00000;
}

:where(.css-dev-only-do-not-override-12jzuas).ant-pagination .ant-pagination-item-active {

    background-color: #ffffff;
    border-color:  #D00000;
}

.ant-pagination .ant-pagination-item-active:hover a {
    color:  #D00000;
}


`
export const SyledSelect = styled.div`

:where(.css-dev-only-do-not-override-12jzuas).ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover .ant-select-selector {
  border-color:#D00000;
}

`
