import { styled } from "styled-components";

export const NavigationBar = styled.nav`

height: 80px;
background-color: #FFFFFF;
position: fixed;
width: 100%;
z-index: 100;
/* padding: 5px; */
padding-bottom: 10px;
padding-top: 20px;
padding-bottom: 10px;

;

`
export const CollapseNav = styled.div`

  display: flex;
  display: ${props => props.dsnone ? 'none' : 'flex'};
  flex-direction: row;
  /* padding-left: 20px; */
  justify-content: space-evenly;
  color: #000;

  .active{
    color:#F43434 !important;
    /* text-decoration: underline !important; */
    text-decoration-color:#F43434  !important;
    color: #F43434!important;
    text-decoration-color: #F43434!important;
    border-bottom: 2px solid #F43434;
    border-radius: 0px;
    position: relative;
    transition-delay: 0.0s;

    @media screen and (max-width:992px){
      border-bottom: none !important;
    }

  }

  & a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
    /* padding: 10px 2px; */
    /* padding-left: 25px; */
    border-radius: 50px;
    /* transition: 0.5s; */
   
    &:hover {
      color: #F43434;
    }
    @media (max-width: 992px){
        color: #000;
        /* background-color: #fbfbfb; */
    }
  }
  @media screen and (min-width: 1207px) and (max-width: 2900px){
        & a { padding: 10px 16px;}
    }
  @media screen and (max-width:992px) {
  display: ${props => props.dsnone ? props.State : 'none'};

    position: absolute;
    /* display: ${(props) => props.State}; */
    flex-direction: column;
    padding-right: 0;
    padding-bottom: 20px;
    /* margin-top: 20px; */
    gap: 0;
    width: 100%;
    top: 3rem;
    right: 0;
    /* background-color: #fff; */
       background-color: #fbfbfb;

    & a {
      display: block;
      text-align: center;
      border-radius: 0;
      line-height: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    top: -2rem;
  }
`
export const LogoPlace = styled.div`


text-align: center;
display: flex;
align-items: center;
justify-content: center;
  @media screen and (max-width: 768px) {
   /* width:150px; */
  /* margin-left: 20px; */
  }

`
export const Iconplace = styled.div`

/* padding-left: 700px; */
/* position: absolute; */
  display: none;

  & svg {
    color: var(--white-color);
    font-size: 2rem;
    cursor: pointer;
  }

  @media screen and (max-width:992px) {
    display: flex;
    /* padding-left: 400px; */
    align-items: center;
    justify-content: center;
    
    /* position: absolute; */

    @media screen and (max-width:768px) {
      position: absolute;
      right: 30px;
      top: -75px;
    }
  }
`

export const NavItem = styled.div`
    color: #fff;
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
    transform:translateY(120px);
    transition: 0.3s;
    opacity:.5;

   &:hover{
    opacity:1;
   }

    &.activeClass{
        color:blue;
        opacity:1;
    }`

export const ModalBody = styled.div`
padding: 60px 40px 40px !important;
/* background-color: rgba(255, 134, 116, 0.20); */
background-size: cover;
background-position: center;
color: #572c5f;
background-attachment: fixed; 

`;


export const Heading = styled.div`
color: white;
height: 70px;
background-color: green;
text-align: center;
font-size: 20px;
font-weight: 700;
letter-spacing: 1px;
/* margin: -5px 0 10px;  */

`;

export const LoginIcon = styled.div`
  display: flex;
  align-items: center;

  @media screen  and (max-width:768px ){
    position: absolute;
    left: 30px;
    top: -77px;
  }

/* @media screen and (max-width:768px) {
  position: absolute;
  left: 250px;
} */
`

export const UserName = styled.div`

@media screen and (max-width:768px) {
  display: none;
}

`