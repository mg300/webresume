import React from "react";
import css from "./ProjectElement.module.css";
const ProjectElement = (props) => {
  return (
    <div
      className={css.projectElement}
      onClick={() => {
        window.location.href = props.url;
      }}
    >
      <img src={props.img} alt="Project element"></img>
      <div>
        <div className={css.title}>{props.title}</div>
        <div className={css.description}>{props.children}</div>
      </div>
    </div>
  );
};
export default ProjectElement;
