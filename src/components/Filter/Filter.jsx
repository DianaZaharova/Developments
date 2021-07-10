import React from "react";
import styles from "./Filter.module.css";

const Filter = (props) => {
  return (
    <div className={styles.wrap}>
      <label className={styles.label} htmlFor="filter">
        Filter
      </label>
      <input
        className={styles.input}
        type="text"
        id="filter"
        name="filter"
        value={props.input}
        onInput={(e) => props.setInput(e.target.value)}
      ></input>
    </div>
  );
};

export default Filter;
