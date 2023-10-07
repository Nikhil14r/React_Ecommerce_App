import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  // Sample Data
  const sampleOrders = [
    {
      id: 1,
      date: '2023-01-15',
      total: 75.99,
      items: [
        { id: 1, name: 'Product 1', price: 25.99, quantity: 2 },
        { id: 2, name: 'Product 2', price: 24.99, quantity: 1 },
      ],
    },
    {
      id: 2,
      date: '2023-04-27',
      total: 49.99,
      items: [
        { id: 3, name: 'Product 3', price: 54.99, quantity: 2 },
      ],
    },
    {
      id: 3,
      date: '2023-05-22',
      total: 30.00,
      items: [
        { id: 3, name: 'Product 3', price: 38.99, quantity: 2 },
      ],
    },
    {
      id: 4,
      date: '2023-07-09',
      total: 99.99,
      items: [
        { id: 3, name: 'Product 3', price: 29.99, quantity: 2 },
      ],
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setOrders(sampleOrders);
    }, 1000);
  }, []);

  return (
    <div className='container'>
      <h2 className="mt-4">Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="table table-striped mt-4">
          <thead className="thead-dark">
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>
                  <ul className="list-unstyled">
                    {order.items.map((item) => (
                      <li key={item.id}>
                        {item.name} (Qty: {item.quantity}) - ${item.price.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistory;
