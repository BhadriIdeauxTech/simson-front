import React from 'react'
import { Row } from '../../Components/Row'
import { Button, Col } from 'antd'

import { StyledBoy, StyledContact, StyledContactus, StyledInstagram, StyledLinks, StyledMap } from './style'

const ContactUs = () => {
    return (
        <StyledContact id='contact' >
            <Row>
                <Col span={24} md={24} lg={12}>
                    <StyledBoy>
                        <p>Top 10 Fashion store Nagercoil in 2023</p>
                    </StyledBoy>
                </Col>
                <Col span={24} md={24} lg={12} >
                    <Row>
                        <Col span={24} md={12} lg={12}>
                            <StyledMap>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1302914176217!2d77.39468477454979!3d8.189627801563717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0b6cf32c63b%3A0xff6afe59b085f108!2sSS%20Nagar%20Main%20Rd%2C%20Christopher%20Colony%20Extension%2C%20Christopher%20Colony%2C%20Nagercoil%2C%20Tamil%20Nadu%20629003!5e0!3m2!1sen!2sin!4v1686974311696!5m2!1sen!2sin" style={{ width: "100%", height: "370px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </StyledMap>
                        </Col>
                        <Col span={24} md={12} lg={12}>
                            <StyledLinks>
                            <a href='https://twitter.com' target='_blank'  rel="noreferrer" className='twitter' >@twitter</a> &nbsp;&nbsp;&nbsp;
                            <a href='https://www.facebook.com/' target='_blank'  rel="noreferrer" className='facebook'>@facebook</a><br/><br/><br/>
                            <a href='https://twitter.com' target='_blank'  rel="noreferrer" className='twitter1' style={{paddingLeft:'80px'}}>@twitter</a><br/><br/>
                            <a href='https://www.facebook.com/' target='_blank'  rel="noreferrer" className='facebook1'  style={{paddingLeft:'100px'}}>@facebook</a><br/><br/>
                            <a href='https://twitter.com' target='_blank'  rel="noreferrer" className='twitter2'>@twitter</a><br/><br/>
                            <a href='https://www.facebook.com/' target='_blank'  rel="noreferrer" className='facebook2'>@facebook</a>
                            </StyledLinks>
                        </Col>
                        <Col span={24} md={12} lg={12}>
                            <StyledContactus>
                                <h1>
                                    Contact Us
                                </h1>
                                <p>
                                    15/257t , S S Nager , Parvathipuram,<br />
                                    Nagercoil - 629003 <br />
                                    9489888031<br />
                                    7339207565
                                </p>
                            </StyledContactus>
                        </Col>
                        <Col span={24} md={12} lg={12}>
                            <StyledInstagram>
                                <div >
                                <a  href='https://www.instagram.com' target='_blank'>
                                <Button>
                                 VIEW ALL IN INSTAGRAM
                                 </Button>
                                    </a>
                                </div>
                            </StyledInstagram>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </StyledContact>
    )
}

export default ContactUs