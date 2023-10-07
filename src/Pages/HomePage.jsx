import React from 'react'
import CustomNavbar from '../Components/Navbar/CustomNavbar'
import Footer from '../Components/Footer/Footer'
import UserTestimonials from '../Components/Testimonials/UserTestimonials'
import HeroSlider from '../Components/Hero/HeroSlider'
import ProductList from '../Components/ProductList/ProductList'
import Checkout from '../Components/Checkout/Checkout'
import { AuthProvider } from '../Components/RagistrationPage/AuthProvider'

const HomePage = () => {
  return (
    <>
      <CustomNavbar />
      <HeroSlider />
      <ProductList />
      <UserTestimonials />
      <Footer />
    </>
  )
}

export default HomePage;