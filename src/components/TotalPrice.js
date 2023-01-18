import React from "react";
import { useSelector } from "react-redux";

const TotalPrice = () => {
  const data = useSelector((state) => state.appState.totalAmount);
  return (
    <div className="total-price">
      <h1 className="tag">Order Summary</h1>
      <h5 className="total">Total: ${data}</h5>
    </div>
  );
};

export default TotalPrice;
