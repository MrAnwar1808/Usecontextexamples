
// App.js
import React from 'react';

import ProductList from './Productlist';
import CartSummary from './Cartsummary';
import { CartProvider } from './Cartprovider';


const Cartpage = () => {
  return (
    <CartProvider>
      <div>
        <h1>Shopping Cart Example</h1>
        <ProductList />
        <CartSummary />
      </div>
    </CartProvider>
  );
};

export default Cartpage;
