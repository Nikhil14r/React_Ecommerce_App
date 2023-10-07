import React from 'react'
import OrderHistory from '../Components/OrderHistory/OrderHistory'
import CustomNavbar from '../Components/Navbar/CustomNavbar'
import Footer from '../Components/Footer/Footer'

const OrderHistoryPage = () => {
    return (
        <>
            <CustomNavbar />
            <OrderHistory />
            <Footer />
        </>
    )
}

export default OrderHistoryPage