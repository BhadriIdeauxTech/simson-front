import React, { useEffect, useState } from 'react'
import NavBar from '../Modules/NavBar/NavBar'
import Footer from '../Modules/Footer/Footer'
import AboutUs from '../Modules/AboutUs/AboutUs'
import { HomePage } from '../Modules/Home/HomePage'
import { ProductPage } from '../Modules/Products/ProductPage'
import ContactUs from '../Modules/ContactUs/ContactUs'
import request from '../Connect/request'
import { useSelector } from 'react-redux'


const MainLayout = () => {

  const [imgUrl, setImgUrl] = useState(null);

  const selectedimage = useSelector(store => store.addproducts.products)

  useEffect(() => {
    DisplayImage();
  }, []);

  useEffect(() => {
    DisplayImage();
  }, [selectedimage])

  const DisplayImage = () => {
    request.get('display')
      .then(function (response) {
        const blob = response.data;
        setImgUrl(blob);
      })
  }

  return (
    <div>
      <NavBar />
      <HomePage />
      <ProductPage imgUrl={imgUrl} DisplayImage={DisplayImage} selectedimage={selectedimage} />
      <ContactUs />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default MainLayout