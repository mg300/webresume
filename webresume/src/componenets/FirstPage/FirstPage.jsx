import React from "react";
import css from "./FirstPage.module.css";

import Main from "./Main";
import Arrow from "./Arrow";
const FirstPage = () => {
  return (
    <div className={css.FirstPage}>
      <Main></Main>
      <Arrow></Arrow>
    </div>
  );
};
export default FirstPage;
