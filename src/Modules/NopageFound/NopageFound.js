import React from 'react'
import { StyledButton, StyledNopage } from './style'
import sad_emoji from '../../Assets/Images/Nopagefound/pageNotFound.png'
import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'

const NopageFound = () => {

  const navigate = useNavigate();
  return (
    <StyledNopage>
      <div>
        <img src={sad_emoji} alt='emoji' width={'500px'} style={{ border: '0px' }} />
        <Card style={{border:'0px',backgroundColor:'#F3F3F3'}}>
          <h1 style={{ fontSize: '37px',paddingBottom:'5px' }}>Page Not Found</h1>
          <StyledButton onClick={()=>navigate('/')}>Go to Home page</StyledButton>
        </Card>
      </div>
    </StyledNopage>
  )
}

export default NopageFound
