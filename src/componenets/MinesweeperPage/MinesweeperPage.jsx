import React from "react";
import css from "./MinesweeperPage.module.css";
import minesweeper from "../Images/mines.png";
import Button from "../Button/Button";
const ProjectPage = () => {
  return (
    <div className={css.ProjectPage}>
      <div className={css.description}>
        <div className={css.title}>Minesweeper</div>
        <div className={css.subtitle}>Do you know where are the mines?</div>
        <Button
          type="github"
          url="https://github.com/MateuszG2000/minesweeper"
        />
        <Button type="live" url="https://minesweeper.gjda.pl" />
      </div>
      <img src={minesweeper} alt="img should be here"></img>
    </div>
  );
};
export default ProjectPage;
