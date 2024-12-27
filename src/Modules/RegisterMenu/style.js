import { Button } from 'antd'
import styled from 'styled-components'


export const TopRegistermenu = styled.div`

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
export const StyledRegistermenu = styled.div`

.ant-input {
    box-sizing: border-box;
    /* margin-top: 20px; */
    /* padding: 15px 7px; */
    padding: 10px;
    border-radius: 0%;
    font-weight:bolder;
};
.ant-input-affix-wrapper >input.ant-input {
    padding: 8px 8px 8px 0px ;
    /* height: 40px; */
    border-radius: 0px;
}
.ant-form-item ::placeholder{
color: #555555;
border-radius: 0px;
}

.ant-select-selector input::placeholder{
color: red !important;

}

:where(.css-dev-only-do-not-override-12jzuas).ant-input-number .ant-input-number-input ::placeholder{
    color: red;
}
.ant-form-item input::placeholder {
  /* Placeholder styles */
  color:#555555;
  font-weight: bolder;
}

.ant-select-selection-search-input::placeholder {
  color: #555555;
  font-weight: bolder; /* Replace with your desired color value */
}

.my-input::placeholder {
  color: blue;
  font-weight: bolder;
}
input::placeholder {
  color: red;
  font-weight: bolder;
}
`

export const StyledRegisterButton = styled(Button)`

background-color: black;
color: white;
border-radius: 0px !important;
height: 45px;
width: 100%;
font-size: large;
text-align: center;
display: flex;
justify-content: center;
align-items: center;


`

export const StyledForm = styled.div`
padding: 20px;

`