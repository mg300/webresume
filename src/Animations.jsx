import { Animator, ScrollContainer, ScrollPage, batch } from "react-scroll-motion";
import FirstPage from "./componenets/FirstPage/FirstPage";
import MinesweeperPage from "./componenets/ProjectPage/MinesweeperPage";
import GsklepPage from "./componenets/ProjectPage/GsklepPage";
import EducationPage from "./componenets/EducationPage/EducationPage";
import SmallProjectsPage from "./componenets/OtherProjectsPage/OtherProjectsPage";
import React from "react";
import About from "./componenets/About/About";

function Animations() {
  const moveOutY = () => ({
    out: {
      style: {
        opacity: (value) => 1.2 - value,
        WebkitOpacity: (value) => 1.2 - value,
        transform: (p) => {
          return `translateY(${p}px)`;
        },
        display: (value) => {
          return "inherit";
        },
      },
    },
  });
  const moveInY = () => ({
    in: {
      style: {
        WebkitOpacity: (value) => value * 2 - 0.6,
        opacity: (value) => value * 2 - 0.6,

        display: (value) => {
          if (value <= 0.2) return "none";
        },
      },
    },
  });
  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <>
            <Animator animation={moveOutY}>
              <FirstPage></FirstPage>
            </Animator>
          </>
        </ScrollPage>

        <ScrollPage>
          <>
            <Animator animation={batch(moveInY(), moveOutY())}>
              <GsklepPage></GsklepPage>
            </Animator>
          </>
        </ScrollPage>
        <ScrollPage>
          <>
            <Animator animation={batch(moveInY(), moveOutY())}>
              <MinesweeperPage></MinesweeperPage>
            </Animator>
          </>
        </ScrollPage>
        <ScrollPage>
          <>
            <Animator animation={batch(moveInY(), moveOutY())}>
              <SmallProjectsPage></SmallProjectsPage>
            </Animator>
          </>
        </ScrollPage>
        <ScrollPage>
          <>
            <Animator animation={batch(moveInY(), moveOutY())}>
              <EducationPage></EducationPage>
            </Animator>
          </>
        </ScrollPage>
        <ScrollPage>
          <>
            <Animator style={{ height: "10px" }} animation={moveInY()}>
              <About></About>
            </Animator>
          </>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default Animations;
