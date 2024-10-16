import React, { createContext, useState } from "react";
import "./cart.css";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (shoe) => {
    const existingItem = cartItems.find((item) => item.id === shoe.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...shoe, quantity: 1 }]);
    }
  };

  const removeFromCart = (shoe) => {
    const existingItem = cartItems.find((item) => item.id === shoe.id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== shoe.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
