import React from "react";
import css from "./Arrow.module.css";
const Arrow = () => {
  return (
    <div className={css.pageDown}>
      <button
        onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
        className={css.button}
      >
        <div className={css.arrow}></div>
        <div className={`${css.arrow} ${css.hidden}`}></div>
        <div className={`${css.arrow} ${css.hidden2}`}></div>
      </button>
    </div>
  );
};
export default Arrow;
