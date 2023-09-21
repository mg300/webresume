import React from "react";
import css from "./Logo.module.css";
const Logo = ({ classname }) => {
  return (
    <div className={css[classname]}>
      <p
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        M<span>G</span>
      </p>
    </div>
  );
};
export default Logo;
