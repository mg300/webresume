import React from "react";
import FirstPage from "./componenets/FirstPage/FirstPage";
import MinesweeperPage from "./componenets/ProjectPage/MinesweeperPage";
import GsklepPage from "./componenets/ProjectPage/GsklepPage";
import EducationPage from "./componenets/EducationPage/EducationPage";
import SmallProjectsPage from "./componenets/OtherProjectsPage/OtherProjectsPage";
import About from "./componenets/About/About";

function MobileWebsite() {
  return (
    <div
      style={{
        margin: "0 auto",
      }}
    >
      <FirstPage />
      <GsklepPage />
      <MinesweeperPage />
      <SmallProjectsPage />
      <EducationPage />
      <About />
    </div>
  );
}

export default MobileWebsite;
