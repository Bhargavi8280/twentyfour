import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ShoeItem = ({ shoe }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="shoe-item">
      <img src={shoe.image} alt={shoe.name} />
      <div>
        <h3>{shoe.name}</h3>
        <p>Price: ${shoe.price}</p>
      </div>
      <button onClick={() => addToCart(shoe)}>Add to Cart</button>
    </div>
  );
};

export default ShoeItem;
