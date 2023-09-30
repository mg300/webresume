import React from "react";
import css from "./About.module.css";
import selfie from "../Images/selfie.jpg";
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
              Hi! I'm Mateusz Gajda and I looking for a fist job in IT industry. orem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
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
            <img src={selfie} alt="Selfie"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
