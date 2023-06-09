import React from "react";
import css from "./Main.module.css";
import Logo from "./Logo";
const Main = () => {
  return (
    <div className={css.main}>
      <div className={css.description}>
        <div className={css.title}>Mateusz Gajda</div>
        <div className={css.subtitle}>Frontend Developer</div>
      </div>
      <Logo classname="logo-big"></Logo>
    </div>
  );
};
export default Main;
