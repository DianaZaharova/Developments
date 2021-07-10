import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Filter from "../Filter/Filter.jsx";
import List from "../List/List.jsx";
import Button from "../Button/Button.jsx";
import Title from "../Title/Title.jsx";
import axios from "axios";

const App = () => {
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");
  const [filtredHouses, setfiltredHouses] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    axios
      .get("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
      .then((res) => {
        const result = res.data.filter((item) => item.id <= 6);
        setHouses(result);
      })
      .catch(() => setError(true));
  }, []);

  const filter = () => {
    if (input.length >= 3) {
      setIsSearch(true);
      setfiltredHouses(
        houses.filter((item) =>
          item.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    filter();
  }, [input]);

  return (
    <div className={styles.wrap}>
      <Title title={"Our Latest Developments"} />
      <Filter input={input} setInput={setInput} />
      {!error ? (
        isSearch ? (
          filtredHouses.length !== 0 ? (
            <List houses={filtredHouses} />
          ) : (
            <p className={styles.info}>Nothing found</p>
          )
        ) : (
          <List houses={houses} />
        )
      ) : (
        <p className={styles.info}>An error has occurred</p>
      )}
      {isSearch ? (
        <Button
          onClick={() => {
            setIsSearch(!isSearch);
            setInput("");
          }}
          text={"Return to home screen"}
          arrowPosition="left"
        />
      ) : (
        <Button text={"See more"} arrowPosition="right" />
      )}
    </div>
  );
};

export default App;
