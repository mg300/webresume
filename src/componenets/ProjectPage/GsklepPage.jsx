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
          I designed and developed a complete e-commerce website with a user-friendly front-end for customers and an
          efficient administration panel connected to a Node.js API. This showcases my expertise in web development, UI
          design, database management, and API creation.
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
          CORS
        </TagComponent>

        <Button type="github" url="https://github.com/mg300/gsklep" />
        <Button type="live" url="https://gsklep.mgjda.pl" />
      </div>
      <img className={css.img} src={gsklepImage} alt="img should be here"></img>
    </div>
  );
};
export default ProjectPage;
