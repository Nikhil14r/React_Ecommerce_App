import React, { useState } from 'react';
import image1 from '../../Assets/image1.jpg';
import Stack from 'react-bootstrap/Stack';
import './cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    // Sample data
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 25.99,
            quantity: 2,
            image: image1,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 19.99,
            quantity: 1,
            image: image1, 
        },
    ]);

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const updateQuantity = (itemId, newQuantity) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="container my-5">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="product-image"
                                        />
                                        <span className="ms-2">{item.name}</span>
                                    </td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                                        />
                                    </td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="subtotal">Subtotal: ${totalPrice.toFixed(2)}</p>
                    <Stack gap={2} className="col-md-5 mx-auto">
                        <Link to="/payment" className="btn btn-primary">Pay and Order</Link>
                        <Link to="/" className="btn btn-outline-primary">Continue Shopping</Link>

                    </Stack>
                </div>
            )}
        </div>
    );
};

export default Cart;
