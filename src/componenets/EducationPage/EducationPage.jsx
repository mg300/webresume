import React from "react";
import css from "./EducactionPage.module.css";
import EducationElement from "./EducationElement";
const EducactionPage = () => {
  return (
    <div className={css.EducationPage}>
      <div>
        <p className={css.title}>Education</p>
        <EducationElement
          date="2020 - Present"
          degree="Bachelor in Computer Engineering"
          schoolName="Opole University of Technology"
        >
          <ul>
            <li>Solving complex matematical problems</li>
            <li>Creating desktop applications, web applications </li>
            <li>
              Working with: JavaScript, C#, Assembly Language C++, Python, SQL,
              HTML, CSS
            </li>
          </ul>
        </EducationElement>
        <EducationElement
          date="2016-2020"
          degree="IT technician "
          schoolName="Ozimek Secondary Technical School of Computer Science "
        >
          <ul>
            <li>Solving matematical problems</li>
            <li>Creating web applications and database administration</li>
            <li>Working with: JavaScript, PHP, SQL, HTML, CSS</li>
            <li>The best student of 2019/2020</li>
          </ul>
        </EducationElement>
      </div>
    </div>
  );
};
export default EducactionPage;
