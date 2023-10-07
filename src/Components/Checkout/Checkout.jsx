import React, { useState, useEffect } from 'react';
import { useAuth } from '../RagistrationPage/AuthProvider';
import Cart from '../ShoppingCart/Cart';
import Stack from 'react-bootstrap/Stack';

const initialShippingInfo = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    pinCode: '',
    country: '',
};

const Checkout = () => {
    const { user } = useAuth();

    const [paymentMethod, setPaymentMethod] = useState('Cash');
    const [requiredFields, setRequiredFields] = useState([]);

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const [shippingInfo, setShippingInfo] = useState({
        firstName: user ? user.firstName : '',
        lastName: user ? user.lastName : '',
        email: user ? user.email : '',
        phoneNumber: '',
        address: '',
        city: '',
        pinCode: '',
        country: '',
    });

    const handleShippingInfoChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    const handleReset = () => {
        setShippingInfo(initialShippingInfo);
        setRequiredFields([]);
    };

    const handleCheckout = async () => {
        // Check for required fields
        const requiredFieldsList = ['firstName', 'lastName', 'email'];
        const missingFields = requiredFieldsList.filter((field) => !shippingInfo[field]);

        if (missingFields.length > 0) {
            setRequiredFields(missingFields);
            return;
        }

        const order = {
            firstName: shippingInfo.firstName,
            lastName: shippingInfo.lastName,
            email: shippingInfo.email,
            phoneNumber: shippingInfo.phoneNumber,
            address: shippingInfo.address,
            city: shippingInfo.city,
            pinCode: shippingInfo.pinCode,
            country: shippingInfo.country,
        };

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            });

            if (response.status === 200) {
                // Order was successfully processed, redirect or show a success message here
            } else {
                // Handle errors
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if (user) {
            setShippingInfo({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                ...shippingInfo,
            });
        }
    }, [user]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className='my-5'>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">
                                            First Name:
                                        </label>
                                        <input type="text" className="form-control" id="firstName" name="firstName" value={shippingInfo.firstName} onChange={handleShippingInfoChange} required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label">
                                            Last Name:
                                        </label>
                                        <input type="text" className="form-control" id="lastName" name="lastName" value={shippingInfo.lastName} onChange={handleShippingInfoChange} required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email:
                                </label>
                                <input type="email" className="form-control" id="email" name="email" value={shippingInfo.email} onChange={handleShippingInfoChange} required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">
                                    Phone Number:
                                </label>
                                <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" value={shippingInfo.phoneNumber} onChange={handleShippingInfoChange} required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    Address:
                                </label>
                                <input type="text" className="form-control" id="address" name="address" value={shippingInfo.address} onChange={handleShippingInfoChange} required
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="city" className="form-label">
                                            City:
                                        </label>
                                        <input type="text" className="form-control" id="city" name="city" value={shippingInfo.city} onChange={handleShippingInfoChange} required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="pinCode" className="form-label">
                                            Pin Code:
                                        </label>
                                        <input type="number" className="form-control" id="pinCode" name="pinCode" value={shippingInfo.pinCode} onChange={handleShippingInfoChange} required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="country" className="form-label">
                                            Country:
                                        </label>
                                        <select className="form-select" id="country" name="country" value={shippingInfo.country} onChange={handleShippingInfoChange} required
                                        >
                                            <option value="">Select a country</option>
                                            <option value="Canada">India</option>
                                            <option value="USA">United States</option>
                                            <option value="UK">United Kingdom</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="my-3">
                                <h5>Payment Method</h5>
                                <p>Chosse One</p>
                                <div className="form-check">
                                    <input type="radio" id="Cash" name="paymentMethod" value="Cash" checked={paymentMethod === 'Cash'} onChange={handlePaymentMethodChange} className="form-check-input"
                                    />
                                    <label htmlFor="Cash" className="form-check-label">
                                        Cash
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" id="CardPayment" name="paymentMethod" value="CardPayment" checked={paymentMethod === 'CardPayment'} onChange={handlePaymentMethodChange} className="form-check-input"
                                    />
                                    <label htmlFor="CardPayment" className="form-check-label">
                                        Card Payment
                                    </label>
                                </div>
                            </div>
                            <Stack direction="horizontal" gap={2} className="col-4 ms-auto">
                                <button type="button" className="btn btn-outline-primary" onClick={handleReset}>
                                    Reset
                                </button>
                                <button type="button" className="btn btn-primary" onClick={handleCheckout}>
                                    Save Address
                                </button>
                            </Stack>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
