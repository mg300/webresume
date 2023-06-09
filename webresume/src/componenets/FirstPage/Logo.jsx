import React from "react";
import css from "./Navbar.module.css";
const Logo = ({ classname }) => {
  return (
    <div className={css[classname]}>
      M<span>G</span>
    </div>
  );
};
export default Logo;
