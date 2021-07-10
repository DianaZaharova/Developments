import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

const Button = (props) => {
  return (
    <button
      className={classNames(
        styles.button,
        props.arrowPosition === "right" && styles["button_rigth"],
        props.arrowPosition === "left" && styles["button_left"]
      )}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  arrowPosition: "right",
};

export default Button;
