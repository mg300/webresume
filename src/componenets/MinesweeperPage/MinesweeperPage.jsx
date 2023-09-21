import React from "react";
import css from "./MinesweeperPage.module.css";
import minesweeper from "../Images/mines.png";
import Button from "../Button/Button";
const ProjectPage = () => {
  return (
    <div className={css.ProjectPage}>
      <div className={css.description}>
        <div className={css.title}>Minesweeper</div>
        <div className={css.subtitle}>
          Minesweeper is a logic game that originated in 1981. Since then, it
          has been available in every version of the Windows operating system.
          This version is a JavaScript version that allows gameplay for users
          with different operating systems such as Mac OS, Linux, and Unix.
        </div>
        <Button
          type="github"
          url="https://github.com/MateuszG2000/minesweeper"
        />
        <Button type="live" url="https://minesweeper.gjda.pl" />
      </div>
      <img className={css.img} src={minesweeper} alt="img should be here"></img>
    </div>
  );
};
export default ProjectPage;
