import React from "react";
import css from "./Navbar.module.css";
const Menu = () => {
  return (
    <div className={css.menu}>
      <a href="/" className={css["menu-el"]}>
        About me
      </a>
      <a href="/" className={css["menu-el"]}>
        Projects
      </a>
      <a href="/" className={css["menu-el"]}>
        Something
      </a>
    </div>
  );
};
export default Menu;
