import styled from 'styled-components'
import { THEME } from '../Theme'

const LoginLabel = styled.span`
  position: relative;
  color: ${THEME.white} !important;
  /* background:red;
  padding:5px 20px; */
  font-weight: 600;
  font-size: 18px !important;
  text-transform: capitalize;
  letter-spacing: 1px !important;
  ${props => props.labelStyle || ''}
  ${props =>
    props.required &&
    `&::after {
      content: '';
      border-radius: 50%;
      height: 4px;
      width: 4px;
      position: absolute;
      top: 8px;
      margin-left:5px;
      padding-left:2px;
  }`}
  span {
    font-weight: 400;
  }
`
export default LoginLabel
