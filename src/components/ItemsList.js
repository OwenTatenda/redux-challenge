import React from "react";
import Item from "./Item";
import styles from "./ItemsList.module.css";
import { useSelector } from "react-redux";

const ItemsList = () => {
  const data = useSelector((state) => state.appState.data);
  return (
    <div className={styles["itemsList"]}>
      {data.map((item) => {
        return (
          <Item
            id={item.id}
            name={item.name}
            available={item.available}
            price={item.price}
            quantity={item.quantity}
            total={item.total}
          ></Item>
        );
      })}
    </div>
  );
};

export default ItemsList;
