import React from "react";
import styles from "./Topics.module.css";

const Topics = () => {
  return (
    <div className={styles["topics"]}>
      <h5>Product ID</h5>
      <h5>Product Name</h5>
      <h5># Available</h5>
      <h5>Price</h5>
      <h5>Quantity</h5>
      <h5>Total</h5>
    </div>
  );
};

export default Topics;
