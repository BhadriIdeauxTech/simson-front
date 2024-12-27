import React from 'react'
import { Cardd, FooterContent, FooterHeading, StyledFooter, StyledHelp, StyledLinks, StyledQuote, StyledRightFooter } from './style'
import { Row } from '../../Components/Row'
import { Col } from 'antd'
import FooterImage from '../../Assets/Images/Footer//Link payment.png.png'
import logo from '../../Assets/Images/Logo/Fish.svg'
import logoword from '../../Assets/Images/Logo/simson.svg'

const Footer = () => {
  return (
    <StyledFooter>
      <FooterHeading>
        Simson Garments | Retail | Wholesale
      </FooterHeading>
      <FooterContent>
        <Row>
          <Col span={24} md={8}>
            <StyledLinks>
              <h1>Quick Links</h1>
              <a href='#home'>Home</a><br />
              <a href='#shop'>Shop</a><br />
              <a href='#about'>About</a><br />
              <a href='#contact'>Contact</a>
            </StyledLinks>
          </Col>

          <Col span={24} md={8}>
            <StyledHelp>
            <h1>
              Help
            </h1>
            <div>
              <a>Terms & Conditions</a><br />
              <a>Privacy policy</a><br />
              <a>Sitemap</a><br />
              <a>Order Status</a>
            </div>
            </StyledHelp>
          </Col>

          <Col span={24} md={8}>
            <StyledRightFooter>
            <img src={logo} alt='logo' style={{ width: '96px' }} /> &nbsp;
            <img src={logoword} alt='logoword' style={{ width: '200px'}} />
            </StyledRightFooter>
            <StyledQuote>
                <p>Contact us and get Quote on your order<br /> via &nbsp;<span>whatsapp</span></p>
            </StyledQuote>
          </Col>
        </Row>
        <Cardd>
          <Row >
            <Col span={24} md={16}>
              <p>Copyright © 2023 Simson – All Rights Reserved.|| Website Design and Develop by :<a href='http://www.ideaux.in' target='_blank'>IDEAUX TECHNOLOGIES</a></p>
            </Col>
            <Col span={24} md={8}>
              <img src={FooterImage} alt='footerimage' style={{ width: "70%" }} />
            </Col>
          </Row>
        </Cardd>
      </FooterContent>
    </StyledFooter>
  )
}

export default Footer