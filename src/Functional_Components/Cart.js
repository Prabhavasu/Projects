import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/carts/1'); // Replace with your API endpoint
        const data = await response.json();
        setCartData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart data: ', error);
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cartData && cartData.products ? (
        <ul>
          {cartData.products.map((product) => (
            <li key={product.id}>
              <div>{product.title}</div>
              <div>Price: ${product.price}</div>
              <div>Quantity: {product.quantity}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No items in the cart</div>
      )}
    </div>
  );
};

export default Cart;
