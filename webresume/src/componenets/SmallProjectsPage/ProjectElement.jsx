import React from "react";
import css from "./ProjectElement.module.css";
const ProjectElement = (props) => {
  return (
    <div className={css.projectElement}>
      <img src={props.img} alt="Project element"></img>
      <p className={css.title}>{props.title}</p>
      <p className={css.description}>{props.children}</p>
    </div>
  );
};
export default ProjectElement;
