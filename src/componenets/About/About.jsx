import React from "react";
import css from "./About.module.css";
import portret from "../Images/mateusz.png";
import react from "../Images/atom.png";
import cssImg from "../Images/css-3.png";
import html from "../Images/html-5.png";
import nodejs from "../Images/nodejs.png";
import js from "../Images/js.png";
const About = () => {
  return (
    <div className={css.about}>
      <div>
        <p className={css.title}>About me</p>
        <div className={css.main}>
          <div>
            <p>
              Computer science is the field of my interest for several years already. I completed internship for IT
              testers with good references. I am capable of javascript, node.js, react, html, css & typescript. The
              specified areas of my curiosity are Front-End and Back-End, hence I would like to expand my knowledge and
              skills as a Full-Stack Developer.<br></br>I am characterized with logical & analytical approach combined
              with focus on details. I am also aware of script importance, fast problem solving and regularity of work
              for effective outcomes.
            </p>
            <div className={css.imgs}>
              <img src={js} alt="stack"></img>
              <img src={react} alt="stack"></img>
              <img src={nodejs} alt="stack"></img>
              <img src={cssImg} alt="stack"></img>
              <img src={html} alt="stack"></img>
            </div>
          </div>

          <div>
            <img className={css.selfie} src={portret} alt="Selfie"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
