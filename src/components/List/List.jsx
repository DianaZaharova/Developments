import React from "react";
import styles from "./List.module.css";
import Item from "../Item/Item";

const List = (props) => {
  return (
    <ul className={styles.list}>
      {props.houses.map((house) => (
        <Item house={house} key={house.id} />
      ))}
    </ul>
  );
};

export default List;
