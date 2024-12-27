import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing:border-box;
  font-family:'Poppins';
  font-size: 15px;

}
  body {
    margin: 0;
    padding: 0;
    font-family:'Poppins';
    width:100%;
    /* overflow:hidden; */
  }

`

export default GlobalStyle
