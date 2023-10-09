import React, { useState } from "react";
import css from "./ProjectPage.module.css";

import minesweeper1 from "../Images/mines.png";
import minesweeper2 from "../Images/mines2.png";
import minesweeper3 from "../Images/mines3.png";
import Button from "../Button/Button";
import TagComponent from "../TagComponent";

let intervalId;
const ProjectPage = () => {
  const [imgNum, setImgNum] = useState(1);
  const images = [minesweeper1, minesweeper2, minesweeper3];

  const setInt = (bool) => {
    if (bool) {
      intervalId = setInterval(() => {
        console.log(imgNum);
        setImgNum((prevImgNum) => (prevImgNum % 3) + 1);
      }, 500);
    } else if (!bool) {
      clearInterval(intervalId);
    }
  };

  return (
    <div className={css.ProjectPage}>
      <div className={css.description}>
        <div className={css.title}>Minesweeper</div>
        <div className={css.subtitle}>
          Minesweeper is a logic game that originated in 1981. Since then, it has been available in every version of the
          Windows operating system. This version is a JavaScript version that allows gameplay for users with different
          operating systems such as Mac OS, Linux, and Unix. I successfully developed this game using a HTML, CSS, and
          vanilla JavaScript.
        </div>
        <TagComponent bgColor="#F0DB4F">Javascript</TagComponent>
        <TagComponent bgColor="#264de4">CSS</TagComponent>
        <TagComponent bgColor="#e34c26">HTML</TagComponent>
        <Button type="github" url="https://github.com/mg300/minesweeper" />
        <Button type="live" url="https://minesweeper.mgjda.pl" />
      </div>
      <img
        onMouseOver={() => setInt(true)}
        onMouseOut={() => setInt(false)}
        className={css.img}
        src={images[imgNum - 1]}
        alt="img should be here"
      ></img>
    </div>
  );
};

export default ProjectPage;
