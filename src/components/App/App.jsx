import React from "react";
import styles from "./App.module.css";
import Filter from "../Filter/Filter.jsx";
import List from "../List/List.jsx";
import Button from "../Button/Button.jsx";
import Title from "../Title/Title.jsx";

const App = () => {
  return (
    <div className={styles.wrap}>
      <Title title={"Our Latest Developments"} />
      <Filter />
      <List />
      <Button text={"See more"} />
    </div>
  );
};

export default App;
