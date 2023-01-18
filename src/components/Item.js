import React from "react";
import styles from "./Item.module.css";
import { useDispatch } from "react-redux";
import { appStateActions } from "../store/appSlice";

const Item = (props) => {
  const dispatch = useDispatch();

  const newItem = {
    id: props.id,
    name: props.name,
    available: props.available,
    price: props.price,
    quantity: props.quantity,
    total: props.total,
  };

  const incrementHandler = () => {
    dispatch(appStateActions.increment(newItem));
  };
  const decrementHandler = () => {
    dispatch(appStateActions.decrement(newItem));
  };
  return (
    <div className={styles["item"]}>
      <h6 className={styles.id}>{props.id}</h6>
      <h6 className={styles.name}>{props.name}</h6>
      <h6 className={styles.available}>{props.available}</h6>
      <h6 className={styles.price}>${props.price}</h6>
      <h6 className={styles.quantity}>{props.quantity}</h6>
      <h6 className={styles.total}>{props.total}</h6>
      <div className={styles["btns"]}>
        <button className={styles["increment"]} onClick={incrementHandler}>
          +
        </button>
        <button className={styles["decrement"]} onClick={decrementHandler}>
          -
        </button>
      </div>
    </div>
  );
};

export default Item;
