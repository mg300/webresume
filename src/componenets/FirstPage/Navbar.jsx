import React from "react";
import Logo from "./Logo";
import css from "./Navbar.module.css";
const Navbar = () => {
  const scrollTo = (el) => {
    window.scrollTo({
      top: (document.body.scrollHeight / 6) * el,
      behavior: "smooth",
    });
  };
  return (
    <div className={css.navbar}>
      <Logo classname="logo"></Logo>
      <ul className={css.menu}>
        <li onClick={() => scrollTo(1)} className={css["menu-el"]}>
          Projects
        </li>
        <li onClick={() => scrollTo(4)} className={css["menu-el"]}>
          Education
        </li>
        <li onClick={() => scrollTo(5)} className={css["menu-el"]}>
          About me
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
