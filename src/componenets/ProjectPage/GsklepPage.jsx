import React from "react";
import css from "./ProjectPage.module.css";
import gsklepImage from "../Images/gsklep.png";
import Button from "../Button/Button";
import TagComponent from "../TagComponent";
const ProjectPage = () => {
  return (
    <div id="gsklep" className={css.ProjectPage}>
      <div className={css.description}>
        <div className={css.title}>Gsklep</div>
        <div className={css.subtitle}>
          Comprehensive E-Commerce Store Application is developed using TypeScript, React, and Sass on the frontend, is
          powered by Node.js with Express, Mongoose, MongoDB on the backend.
        </div>
        <TagComponent bgColor="#007acc">Typescript</TagComponent>
        <TagComponent bgColor="#61DBFB">React</TagComponent>
        <TagComponent bgColor="#3c873a">Node.js</TagComponent>
        <TagComponent bgColor="#cc6699">SCSS</TagComponent>
        <TagComponent bgColor="#e34c26">HTML</TagComponent>
        <TagComponent color="white" bgColor="#202020">
          Redux
        </TagComponent>
        <TagComponent color="white" bgColor="#202020">
          React Router
        </TagComponent>
        <TagComponent color="white" bgColor="#202020">
          Mongoose
        </TagComponent>
        <TagComponent color="white" bgColor="#202020">
          Express.js
        </TagComponent>
        <TagComponent color="white" bgColor="#202020">
          MongoDB
        </TagComponent>
        <TagComponent color="white" bgColor="#202020">
          JWT
        </TagComponent>
        <TagComponent color="white" bgColor="#202020">
          Bcrypt
        </TagComponent>
        <TagComponent color="white" bgColor="#202020">
          Cors
        </TagComponent>

        <Button type="github" url="https://github.com/MateuszG2000/gmarktshop" />
        <Button type="live" url="https://gsklep.gjda.pl" />
      </div>
      <img className={css.img} src={gsklepImage} alt="img should be here"></img>
    </div>
  );
};
export default ProjectPage;
