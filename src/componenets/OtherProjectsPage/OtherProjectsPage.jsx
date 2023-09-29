import React from "react";
import css from "./OtherProjectsPage.module.css";
import ProjectElement from "./ProjectElement";
import assembly1 from "../Images/assembly1.png";
import assembly2 from "../Images/assembly2.png";
import stegano from "../Images/stegano.png";
import TagComponent from "../TagComponent";
const SmallProjectsPage = () => {
  return (
    <div className={css.smallProjectsPage}>
      <p className={css.title}>Other projects</p>
      <div className={css.main}>
        <ProjectElement url="https://github.com/mg300/Assembly-Hex-Converter" img={assembly1} title="Hex Converter">
          From HEX to DEC, BIN, OCT
          <TagComponent color="white" marginTop="1rem" bgColor="#202020">
            Assembly Language
          </TagComponent>
        </ProjectElement>
        <ProjectElement
          url="https://github.com/mg300/Assembly-SimpsonsRule-Numerical-Integration"
          img={assembly2}
          title="Simpson's Rule Calc"
        >
          Numerical Integration cos<sup>2</sup> x
          <TagComponent marginTop="1rem" color="white" bgColor="#202020">
            Assembly Language
          </TagComponent>
        </ProjectElement>
        <ProjectElement url="https://github.com/mg300/Steganography" img={stegano} title="Steganography">
          Hide text in image<br></br>
          <TagComponent marginTop="1rem" color="white" bgColor="#202020">
            Python
          </TagComponent>
        </ProjectElement>
      </div>
    </div>
  );
};
export default SmallProjectsPage;
