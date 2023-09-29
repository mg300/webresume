import React from "react";
import css from "./EducactionPage.module.css";
const EducactionPage = () => {
  return (
    <div className={css.EducationPage}>
      <div>
        <p className={css.title}>Education</p>
        <div className={css.EducationElement}>
          <div className={css.date}>2020 - Present</div>
          <div className={css.main}>
            <div className={css.degree}>Bachelor in Computer Engineering</div>
            <div className={css.schoolName}>Opole University of Technology</div>
            <div className={css.description}>
              {" "}
              <ul>
                <li>Solving complex matematical problems</li>
                <li>Creating desktop applications, web applications </li>
                <li>Working with: JavaScript, C#, Assembly Language C++, Python, SQL, HTML, CSS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={css.EducationElement}>
          <div className={css.date}>2016-2020</div>
          <div className={css.main}>
            <div className={css.degree}>IT technician</div>
            <div className={css.schoolName}>Ozimek Secondary Technical School of Computer Science</div>
            <div className={css.description}>
              {" "}
              <ul>
                <li>Solving matematical problems</li>
                <li>Creating web applications and database administration</li>
                <li>Working with: JavaScript, PHP, SQL, HTML, CSS</li>
                <li>The best student of 2019/2020</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducactionPage;
