import React from "react";
import css from "./Button.module.css";
import { BsGithub } from "react-icons/bs";
import { RiLiveFill } from "react-icons/ri";
function Button({ type, url }) {
  return (
    <a className={css.link} href={url}>
      <button
        className={`${css.btn} ${type === "github" ? css.git : css.live}`}
        aria-label={type === "github" ? "Github" : "Live Server"}
      >
        <span className={css.icon}>{type === "github" ? <BsGithub /> : <RiLiveFill />}</span>
        {type === "github" ? "Github" : "Live Server"}
      </button>
    </a>
  );
}

export default Button;
