import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './data';
import './App.css';  // Importing CSS file

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      newQuantity > 0
        ? prevCart.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          )
        : prevCart.filter((item) => item.id !== id)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <h1>E-Commerce Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
