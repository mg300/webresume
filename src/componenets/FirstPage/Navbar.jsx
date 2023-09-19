import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import css from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={css.navbar}>
      <Logo classname="logo"></Logo>
      <Menu></Menu>
    </div>
  );
};
export default Navbar;
