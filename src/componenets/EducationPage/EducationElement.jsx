import React from "react";
import css from "./EducationElement.module.css";
const EducationElement = (props) => {
  return (
    <div className={css.EducationElement}>
      <div className={css.date}>{props.date}</div>
      <div className={css.main}>
        <div className={css.degree}>{props.degree}</div>
        <div className={css.schoolName}>{props.schoolName}</div>
        <div className={css.description}>{props.children}</div>
      </div>
    </div>
  );
};
export default EducationElement;
