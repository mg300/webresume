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
            <div className={css.degree}>Bachelor of Computer Engineering</div>
            <div className={css.schoolName}>Opole University of Technology</div>
            <div className={css.description}>
              {" "}
              <ul>
                <li>Proficient in solving complex mathematical problems.</li>
                <li>Proficient in web development technologies: HTML, CSS and SCSS.</li>
                <li>Experienced in developing desktop and web applications. </li>
                <li>Skilled in programming languages: JavaScript, SQL, Assembly Language and basics of C++, Python.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={css.EducationElement}>
          <div className={css.date}>2016-2020</div>
          <div className={css.main}>
            <div className={css.degree}>IT Technician</div>
            <div className={css.schoolName}>Ozimek Secondary Technical School of Computer Science</div>
            <div className={css.description}>
              {" "}
              <ul>
                <li>
                  Proficient in mathematical problem-solving. Competent in programming languages: JavaScript, PHP, SQL.
                </li>
                <li>Skilled in developing web applications and proficient in database administration.</li>
                <li>Proficient in web development technologies: HTML and CSS.</li>
                <li>Recognized as the top student for the school year 2019/2020.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducactionPage;
