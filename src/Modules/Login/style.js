import styled, { css } from 'styled-components'
import { Card, Input, } from 'antd'
import { THEME } from '../../Theme'
import BgimgLogin from '../../Assets/Images/Home/login-bg.avif'



export const StyledProductDetails = styled.div`

& h1{
    text-align: center;
    font-size: 50px;
    color: 1E1E1E;
}

.th{
    background-color: red;
}
.ant-table-cell{
    background-color: red;
}
.ant-table-thead >tr>td {
    background: red;
}
.ant-table{
    background: red;
}
.ant-table-thead > tr > th {
  background: green;
  color: white;
}
`

export const StyledDetails = styled.div`

margin-top: 70px;

`

export const StyledCustomer = styled.div`

& h1{
    text-align: center;
    font-size: 50px;
    color: 1E1E1E;
}

`


export const StyledCustomerDetails = styled.div`

margin-top: 70px;

`

export const StyledLogin = styled.div`

background-image: url(${BgimgLogin});
height: 100vh;
background-repeat:no-repeat;
background-size: cover;
display: flex;
align-items: center;

@media(max-width:700px){
    background-position:right center;
}

`
export const LoginDetails = styled.div`
  background: #993366;
  text-align: center;
  max-width: 450px;
  width: 450px;
  margin: auto;
  border-radius: 20px 20px 0px 20px;
  background-color:rgba(255,255,255,0.2);
  backdrop-filter:blur(5px);
  padding: 40px 32px;
  border-radius:0px 40px 0px 40px;
  border: 2px solid #949292;

  
@media (max-width:700px) {
    width: 350px;
}
`;


export const StyledProductTable = styled.div`

margin-top: 70px;

:where(.css-dev-only-do-not-override-12jzuas).ant-table-wrapper .ant-table-thead >tr>th{
    background-color: #993366;
    color: white;
}

`


export const MainLayout = styled.section`

min-height:100vh;
display:flex;
width:100%;
transition:0.5s;
`;

export const SideBar = styled.aside`
.ant-menu-item,.ant-menu-item {
    margin-top: 18px;
}
.ant-menu-item.ant-menu-item-only-child{
    padding-left:20px !important;

}
.ant-menu-submenu-title{
    padding-left:20px !important;
}
.ant-menu-submenu-title:hover{
    color: var(--light-color) !important;

}


.ant-menu-item:not(.ant-menu-item-selected):hover {
    color: ${THEME.secondary_color} !important;
    background:  var(--light-color) !important;
}
.ant-menu-item-selected {
    color: ${THEME.secondary_color} !important;
    background:  var(--light-color) !important;
}
.ant-menu-submenu-title:active {
    background-color: #fff0 !important;
    color:var(--light-color);
}
.ant-menu-light .ant-menu-submenu-selected >.ant-menu-submenu-title {
    color: var(--light-color) !important;
}
.ant-menu {
    color: ${THEME.orange};
    background: ${THEME.secondary_color};
    border-radius: 15px;
}
z-index: 10;
    position: sticky;
    top: 100px;
    height: calc(100vh - 100px);
    overflow-y: auto;
    width: 250px;
    background: ${THEME.secondary_color};
    border-radius: 20px;
    transition: all 0.5s ease 0s;
    margin: 5px;
@media (max-width:700px) {
    position:fixed;
}
${props => {

        switch (props.collapsed) {
            case true:
                return css`
            width:0px;
            transition:0.5s;
            `;
            case false:
                return css`
            width:250px;
            transition:0.5s;
            `;
            default:
                return css`
            width:250px;
            transition:0.5s;
            `;
        }
    }
    }
`;
export const CollapseTrigger = styled.div`
display:none;
cursor: pointer;
& svg{
    font-size:1.5rem;
}
@media (max-width:1100px) {
    display:block
}

`;
export const CollapseDiv = styled.div`

.ant-tooltip-inner {
    background-color: red !important;
}
.ant-btn-default {
    border-color: #ffffff14; 
    box-shadow: none;
     :hover {
      border-color: #ffffff14; 
      box-shadow: none;
     }
}
position:relative;
background:var(--light-color);
display:flex;
flex-direction:row;
align-items:center;
gap:10px;
z-index:10;
transition:0.5s;
@media (max-width:1100px) {
    position:absolute;
    padding:20px;
    right:20px;
    top:104px;
    z-index:10;
    flex-direction:column;
    transition:0.5s;
    ${props => {

        switch (props.collapse) {
            case true:
                return css`
          display:flex;
          z-index:10;
          transition:0.5s;
            `;
            case false:
                return css`
          display:none;
          transition:0.5s;
            `;
            default:
                return css`
           display:none;
           transition:0.5s;
            `;
        }
    }
    }
}
@media (max-width:697px) {
    position:absolute;
    padding:20px;
    right:0;
    left:0;
    top:104px;
    z-index:10;
    flex-direction:column;
    transition:0.5s;
    ${props => {

        switch (props.collapse) {
            case true:
                return css`
          display:flex;
          z-index:10;
          transition:0.5s;
            `;
            case false:
                return css`
          display:none;
          transition:0.5s;
            `;
            default:
                return css`
           display:none;
           transition:0.5s;
            `;
        }
    }
    }
}

`;
export const ContentLayout = styled.section`
transition:0.5s;
height:inherit;
height:100vh;
overflow:hidden;

${props => {

        switch (props.collapsed) {
            case true:
                return css`
            width:100%;
            margin-left:0;
            transition:0.5s;
            `;
            case false:
                return css`
           width:calc(100% - 250px);
           transition:0.5s;
           @media (max-width:700px) {
    width:100%;
}
            `;
            default:
                return css`
           width:calc(100% - 250px);
           transition:0.5s;
           @media (max-width:700px) {
    width:100%;
}
            `;
        }
    }}
`;
export const ContentHeader = styled.div`
 .ant-tooltip-inner {
    background-color: red !important;
}
z-index:20;
position:fixed;
padding:20px;

background:${THEME.grey};
top:0;
left:0;
right:0;
transition:0.5s;

`;
export const MainContent = styled.section`
padding: 0 10px;
margin:100px 10px 10px 10px;
height:calc(100vh - 120px);
overflow-x:hidden;
overflow-y:auto;
`;



export const SearchInput = styled(Input)`
&.ant-input-affix-wrapper{
    border:none ;
    box-shadow:none;
}
& .ant-input-prefix{
    margin-inline-end:10px;
}
`;

export const HeaderIconHolder = styled.div`
    display: flex;
    gap: 20px;
    padding: 10px;
    & .header__icon{
    font-size: 28px;
    cursor: pointer;
    }
`

export const BtnSideHolder = styled.div`
margin: 0 10px;
 background: black;
    width: 40px;
    height: 40px;
    display: flex;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
 
 & .header__icon{
    font-size: 26px;
    }
`

export const LogoHolder = styled.div`
    width:120px;
    text-align:center;
    font-size:14px;
    text-transform:uppercase;
    font-weight:600;
& h1{
    font-size:23px;
    display: flex;
   
}
    @media ${THEME.MOBILEL}{
        width:250px;
        font-size:16px;
    }
`

export const DashCardViewsite = styled(Card)`
margin-top: 100px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
background-color: #993366;
color: white;

& p{
    color: gold;
}

`

export const DashCardAddproducts = styled(Card)`
margin-top: 100px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
background-color: #993366;
color: white;


& p{
    color: gold;
}
`

export const DashCardViewgallery = styled(Card)`

margin-top: 100px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
background-color:#993366;
color: white;


& p{
    color: gold;
}
`
export const StyledTable = styled.div`

& h1{
    font-size: 2rem;
color:"#435763" ;
text-align: center;
}

`
export const DashCardHolder = styled.div`
    background:${THEME.primary_color};
    padding:20px 10px;
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition:0.5s;
    cursor: pointer;
    
    &:hover{
      box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
`

export const BackBtn = styled.div`
    margin:25px;

    & span{
        background:${THEME.secondary_color};
        padding:10px 20px;
        border-radius:10px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        cursor: pointer;
        transition:0.5s;
        font-size:1.2rem;
        font-weight:600;
        &:hover{
            background:${THEME.primary_color};
            letter-spacing:1px;
            color:#fff;
        }
    }
`