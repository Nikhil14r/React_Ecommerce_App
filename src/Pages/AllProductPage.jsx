import React from 'react'
import ProductSection from '../Components/ProductList/ProductList'
import Footer from '../Components/Footer/Footer'
import CustomNavbar from '../Components/Navbar/CustomNavbar'

const AllProductPage = () => {
    return (
        <>
            <CustomNavbar />
            <ProductSection />
            <Footer/>
        </>
    )
}

export default AllProductPage