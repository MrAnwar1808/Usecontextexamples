

import React, { useContext } from 'react';
import { CartContext } from './Cartprovider';


const CartSummary = () => {

  const { cart, removeFromCart } = useContext(CartContext);


  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
