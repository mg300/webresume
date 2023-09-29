import React from "react";
import css from "./OtherProjectsPage.module.css";
import ProjectElement from "./ProjectElement";
import img from "../Images/mines.png";
import assembly1 from "../Images/assembly1.png";
import assembly2 from "../Images/assembly2.png";
import stegano from "../Images/stegano.png";
const SmallProjectsPage = () => {
  return (
    <div className={css.smallProjectsPage}>
      <p className={css.title}>Other projects</p>
      <div className={css.main}>
        <ProjectElement
          url="https://github.com/mg300/Assembly-Hex-Converter"
          img={assembly1}
          title="Hex Converter"
        >
          From HEX to DEC, BIN, OCT
        </ProjectElement>
        <ProjectElement
          url="https://github.com/mg300/Assembly-SimpsonsRule-Numerical-Integration"
          img={assembly2}
          title="Simpson's Rule Calc"
        >
          Numerical Integration cos<sup>2</sup> x
        </ProjectElement>
        <ProjectElement img={stegano} title="Steganography">
          Hide text in image
        </ProjectElement>
      </div>
    </div>
  );
};
export default SmallProjectsPage;
