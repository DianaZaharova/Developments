import React from "react";
import styles from "./App.module.css";
import Filter from "../Filter/Filter.jsx";
import List from "../List/List.jsx";
import Button from "../Button/Button.jsx";

const App = () => {
  return (
    <div className={styles.wrap}>
      <h1>Our Latest Developments</h1>
      <Filter />
      <List />
      <Button />
    </div>
  );
};

export default App;
