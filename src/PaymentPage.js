// PaymentPage.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./PaymentCart.css"; // Import the CSS file

const PaymentPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement payment logic here
    alert("Payment Successful!");
    clearCart();
    navigate("/");
  };

  return (
    <div>
      <h2>Payment Page</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h3>Your Items:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <form onSubmit={handlePayment}>
            <h3>Enter Credit Card Details</h3>
            <input type="text" placeholder="Card Number" required />
            <input type="text" placeholder="Expiry Date" required />
            <input type="text" placeholder="CVV" required />
            <button type="submit">Pay Now</button>
          </form>
        </div>
      )}
      <button className="return-button" onClick={() => navigate("/")}>
        Return to Shopping
      </button>
    </div>
  );
};

export default PaymentPage;
