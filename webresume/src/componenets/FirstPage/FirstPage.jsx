import React from "react";
import css from "./FirstPage.module.css";
import Navbar from "./Navbar";
import Background from "./Background-animation";
import Main from "./Main";
import Arrow from "./Arrow";
const FirstPage = () => {
  return (
    <div className={css.FirstPage}>
      <Navbar></Navbar>
      <Background></Background>
      <Main></Main>
      <Arrow></Arrow>
    </div>
  );
};
export default FirstPage;
