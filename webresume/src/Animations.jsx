import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import "./App.css";
import FirstPage from "./componenets/FirstPage/FirstPage";
import ProjectPage from "./componenets/ProjectPage/ProjectPage";
import EducationPage from "./componenets/EducationPage/EducationPage";
import SmallProjectsPage from "./componenets/SmallProjectsPage/SmallProjectsPage";
import React from "react";
import { useEffect, useState } from "react";
import About from "./componenets/About/About";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
};

function Animations() {
  const scrollPosition = useScrollPosition();

  return (
    <div>
      <ScrollContainer>
        <ScrollPage>
          <div
            style={{
              display: `${scrollPosition > 870 ? "none" : "inherit"}`,
            }}
          >
            <Animator animation={batch(Sticky(), MoveOut(0, -1000))}>
              <FirstPage></FirstPage>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div
            style={{
              display: `${scrollPosition < 250 ? "none" : "inherit"}`,
            }}
          >
            <Animator animation={batch()}>
              <ProjectPage></ProjectPage>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div>
            <Animator animation={batch()}>
              <EducationPage></EducationPage>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div>
            <Animator animation={batch()}>
              <SmallProjectsPage></SmallProjectsPage>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div>
            <Animator animation={batch(Zoom())}>
              <About></About>
            </Animator>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}
export default Animations;
