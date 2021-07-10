import React from "react";
import styles from "./List.module.css";
import Item from "../Item/Item";

const List = () => {
  return (
    <ul className={styles.list}>
      <Item />
    </ul>
  );
};

export default List;
