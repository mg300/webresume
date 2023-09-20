import React from "react";
import css from "./GsklepPage.module.css";
import gsklepImage from "../Images/gsklep.png";
import Button from "../Button/Button";
const ProjectPage = () => {
  return (
    <div className={css.ProjectPage}>
      <div className={css.description}>
        <div className={css.title}>Gsklep</div>
        <div className={css.subtitle}>
          Online shops Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis repellendus quis suscipit architecto autem officia velit ex
          pariatur, at, saepe nobis explicabo modi delectus ad blanditiis. Nihil
          voluptatem minus tenetur.
        </div>
        <Button
          type="github"
          url="https://github.com/MateuszG2000/gmarktshop"
        />
        <Button type="live" url="" />
      </div>
      <img
        style={{ width: "30rem" }}
        src={gsklepImage}
        alt="img should be here"
      ></img>
    </div>
  );
};
export default ProjectPage;
