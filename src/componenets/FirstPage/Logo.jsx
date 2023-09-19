import React from "react";
import css from "./Logo.module.css";
const Logo = ({ classname }) => {
  return (
    <div className={css[classname]}>
      <a href="/">
        M<span>G</span>
      </a>
    </div>
  );
};
export default Logo;
