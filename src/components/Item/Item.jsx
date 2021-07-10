import React from "react";
import styles from "./Item.module.css";
import Badge from "../Badge/Badge";

const Item = (props) => {
  return (
    <li className={styles.item}>
      <a className={styles.link} href="/details/[id]">
        <div className={styles["img-wrap"]}>
          <img className={styles.img} src="./img/house-1.jpg" alt="House" />
        </div>
        <div className={styles["content-wrap"]}>
          <h3 className={styles.name}>Brunlees Court</h3>
          <p className={styles.address}>19-23 Cambridge Road, Southport</p>
          <p className={styles.sale}>
            New Properties for Sale from{" "}
            <span className={styles["sale_bold"]}>£214,999</span>
          </p>
          <p className={styles.conditions}>Shared Ownership Available</p>
        </div>
        <Badge />
      </a>
    </li>
  );
};

export default Item;
