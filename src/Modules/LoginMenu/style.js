import { Button } from 'antd'
import styled from 'styled-components'


export const TopLoginmenu = styled.div`

height: 70px;

background-color: green;
color: white;
text-align: center;
align-items: center;
display: flex;
padding-left: 10px;


& h1{
    font-size: 24px;
}


`
export const StyledLoginmenu = styled.div`

.ant-input {
    box-sizing: border-box;
    /* margin-top: 20px; */
    /* padding: 15px 7px; */
    padding: 10px;
    border-radius: 0%;
    font-weight:bolder;
}
.ant-input-affix-wrapper >input.ant-input {
    padding: 8px 8px 8px 0px ;
    height: 40px;
    border-radius: 0px;
}

.ant-form-item ::placeholder{
color: #555555;
}
`

export const StyledLoginButton = styled(Button)`

background-color: black;
color: white;
border-radius: 0px !important;
/* padding: 25px 300px; */
height: 45px;
width: 100%;
font-size: large;
text-align: center;
display: flex;
justify-content: center;
align-items: center;


`
export const StyledForm = styled.div`

padding:20px

`
