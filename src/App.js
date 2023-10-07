import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Components/RagistrationPage/AuthProvider';
import './App.css';
import OrderHistory from './Components/OrderHistory/OrderHistory';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';
import NoMatch from './Pages/NoMatch';
import PaymentPage from './Pages/PaymentPage';
import HomePage from './Pages/HomePage';
import CheckoutPage from './Pages/CheckoutPage';
import ContactPage from './Pages/ContactPage';
import AllProductPage from './Pages/AllProductPage';
import OrderHistoryPage from './Pages/OrderHistoryPage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="checkout" element={
            <AuthProvider>
              <CheckoutPage />
            </AuthProvider>
          }
        />
        <Route exact path="/footer" element={<Footer />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/orderHistory" element={<OrderHistory />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/checkoutPage" element={<CheckoutPage />} />
        <Route exact path="/orderHistoryPage" element={<OrderHistoryPage />} />
        <Route exact path="/allProductPage" element={<AllProductPage />} />
        <Route exact path="/payment" element={<PaymentPage />} />
        <Route exact path="*" element={<NoMatch />} />
      </Routes>
    </>

  );
}

export default App;
