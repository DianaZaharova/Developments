import React from "react";
import styles from "./Badge.module.css";
import classNames from "classnames";

const Badge = (props) => {
  return (
    <div
      className={classNames(
        styles.badge,
        props.type === "IndependentLiving" && styles["badge_blue"],
        props.type === "SupportAvailable" && styles["badge_orange"]
      )}
    >
      {props.type === "IndependentLiving"
        ? "Independent living"
        : "Restaurant & Support available"}
    </div>
  );
};

Badge.defaultProps = {
  type: "IndependentLiving",
};

export default Badge;
