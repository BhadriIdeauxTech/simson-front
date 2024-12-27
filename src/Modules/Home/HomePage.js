import { Col } from 'antd'
import React from 'react'
import image1 from '../../Assets/Images/Home/home3-banner1.jpg.png'
import image2 from '../../Assets/Images/Home/home3-banner2.jpg.png'
import image3 from '../../Assets/Images/Home/home3-banner3.jpg.png'
import image4 from '../../Assets/Images/Home/home3-banner4.jpg.png'
import { StyledButton, StyledHome, StyledHomePage, StyledImage } from './style'
import { Row } from '../../Components/Row'

export const HomePage = () => {

    return (
        <StyledHome id='home'>
            {/* <a href='#shop'>
            <img src={home_image} alt='home' style={{width:'100%'}}/>
            </a> */}
            <Row gutter={[24, 24]}>
                <Col span={24} md={8}>
                    <StyledHomePage>
                        <h1>Welcome to Simson Garments <br />
                            Your Fashion Destination
                        </h1><br />
                        <div style={{ width: '70px', padding: '2px', backgroundColor: '#F43434', margin: 'auto', marginTop: '20px' }}></div><br />
                        <p>
                            Discover the finest apparel for every occasion at Simson Garments. Whether you're shopping for yourself or looking to stock up for your business, we offer a diverse range of stylish and high-quality garments. Our collections are carefully curated to bring you the latest fashion trends, all at competitive prices. Experience the perfect blend of comfort, style, and affordability with our exclusive retail and wholesale offerings.
                        </p>
                        <a href='#shop'>
                            <StyledButton>Explore Our Collections</StyledButton>
                        </a>
                    </StyledHomePage>
                </Col>

                <Col span={24} md={16}>
                    <Row >
                        <Col span={24} md={12}>
                            <StyledImage >
                                <img src={image1} alt="" />
                            </StyledImage>
                        </Col>

                        <Col span={24} md={12}>
                            <StyledImage>
                                <img src={image2} alt="" />
                            </StyledImage>
                        </Col>

                        <Col span={24} md={12}>
                            <StyledImage>
                                <img src={image3} alt="" />
                            </StyledImage>
                        </Col>

                        <Col span={24} md={12}>
                            <StyledImage>
                                <img src={image4} alt="" />
                            </StyledImage>
                        </Col>

                    </Row>
                </Col>
            </Row>
            <br />
            <br />

        </StyledHome>
    )
}
