import React from "react";
import css from "./SmallProjectsPage.module.css";
import ProjectElement from "./ProjectElement";
import img from "../Images/mines.png";
const SmallProjectsPage = () => {
  return (
    <div className={css.smallProjectsPage}>
      <p className={css.title}>Other projects</p>
      <div className={css.main}>
        <ProjectElement img={img} title="Minesweeper">
          Lets play a game!
        </ProjectElement>
        <ProjectElement img={img} title="Minesweeper">
          Lets play a game!
        </ProjectElement>
        <ProjectElement img={img} title="Minesweeper">
          Lets play a game!
        </ProjectElement>
        <ProjectElement img={img} title="Minesweeper">
          Lets play a game!
        </ProjectElement>
        <ProjectElement img={img} title="Minesweeper"></ProjectElement>
      </div>
    </div>
  );
};
export default SmallProjectsPage;
