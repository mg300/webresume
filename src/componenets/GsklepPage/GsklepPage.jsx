import React from "react";
import css from "./GsklepPage.module.css";
import gsklepImage from "../Images/gsklep.png";
import Button from "../Button/Button";
const ProjectPage = () => {
  return (
    <div id="gsklep" className={css.ProjectPage}>
      <div className={css.description}>
        <div className={css.title}>Gsklep</div>
        <div className={css.subtitle}>
          Comprehensive E-Commerce Store Application is developed using
          TypeScript, React, and Sass on the frontend, is powered by Node.js
          with Express, Mongoose, MongoDB on the backend.
        </div>
        <Button
          type="github"
          url="https://github.com/MateuszG2000/gmarktshop"
        />
        <Button type="live" url="" />
      </div>
      <img className={css.img} src={gsklepImage} alt="img should be here"></img>
    </div>
  );
};
export default ProjectPage;
