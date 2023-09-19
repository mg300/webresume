import React from "react";
import css from "./EducationElement.module.css";
const EducationElement = (props) => {
  return (
    <div className={css.EducationElement}>
      <div className={css.date}>{props.date}</div>
      <div className={css.main}>
        <p className={css.degree}>{props.degree}</p>
        <p className={css.schoolName}>{props.schoolName}</p>
        <p className={css.description}>{props.children}</p>
      </div>
    </div>
  );
};
export default EducationElement;
