import React from "react";
import styles from "./Item.module.css";
import Badge from "../Badge/Badge";

const Item = (props) => {
  return (
    <li className={styles.item}>
      <a className={styles.link} href={`/details/${props.house?.id}`}>
        <div className={styles["img-wrap"]}>
          <img
            className={styles.img}
            src={`./img/house-${props.house?.id}.jpg`}
            alt="House"
          />
        </div>
        <div className={styles["content-wrap"]}>
          <h3 className={styles.name}>
            {props.house?.title ?? "No information"}
          </h3>
          <p className={styles.address}>
            {props.house?.address ?? "No information"}
          </p>
          <p className={styles.sale}>
            New Properties for Sale from{" "}
            <span className={styles["sale_bold"]}>
              £{props.house?.price.toLocaleString("en-EN") ?? "No information"}
            </span>
          </p>
          <p className={styles.conditions}>Shared Ownership Available</p>
        </div>
        <Badge type={props.house?.type} />
      </a>
    </li>
  );
};

export default Item;
