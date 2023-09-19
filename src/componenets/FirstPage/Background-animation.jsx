import React from "react";
import css from "./Background-animation.module.css";

const Background = () => {
  const getRandomNumber = () => {
    const number = Math.floor(Math.random() * 30 + 5);
    return number;
  };
  const renderBody = () => {
    let body = [];
    for (let i = 0; i < 35; i++) {
      body.push(
        <div
          key={i}
          className={css.line}
          style={{ "--var": getRandomNumber() }}
        ></div>
      );
    }
    return body;
  };

  return <div className={css.background}>{renderBody()}</div>;
};
export default Background;
