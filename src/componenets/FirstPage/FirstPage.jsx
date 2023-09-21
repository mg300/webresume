import React from "react";
import css from "./FirstPage.module.css";
import Logo from "./Logo";
const FirstPage = () => {
  return (
    <div className={css.FirstPage}>
      <div className={css.main}>
        <div className={css.description}>
          <div className={css.title}>Mateusz Gajda</div>
          <div className={css.subtitle}>Frontend Developer</div>
        </div>
        <Logo classname="logo-big"></Logo>
      </div>
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
    </div>
  );
};
export default FirstPage;
