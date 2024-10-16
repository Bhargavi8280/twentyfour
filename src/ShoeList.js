import React from "react";
import ShoeItem from "./ShoeItem";

const ShoeList = ({ shoes }) => {
  return (
    <div className="shoe-list">
      <h2>Available Shoes</h2>
      {shoes.map((shoe) => (
        <ShoeItem key={shoe.id} shoe={shoe} />
      ))}
    </div>
  );
};

export default ShoeList;
