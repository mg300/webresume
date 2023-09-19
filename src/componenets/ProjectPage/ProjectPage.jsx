import React from "react";
import css from "./ProjectPage.module.css";
import minesweeper from "../Images/mines.png";
const ProjectPage = () => {
  return (
    <div className={css.ProjectPage}>
      <div className={css.description}>
        <div className={css.title}>Minesweeper</div>
        <div className={css.subtitle}>Do you know where are the mines?</div>
      </div>
      <img src={minesweeper} alt="img should be here"></img>
    </div>
  );
};
export default ProjectPage;
