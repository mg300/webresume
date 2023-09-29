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
        <p className={css.title}>{props.title}</p>
        <p className={css.description}>{props.children}</p>
      </div>
    </div>
  );
};
export default ProjectElement;
