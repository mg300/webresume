import Navbar from "./componenets/FirstPage/Navbar";
import Background from "./componenets/FirstPage/Background-animation";
import React, { useRef } from "react";
import Animations from "./Animations";
import MobileWebsite from "./MobileWebsite";

function App() {
  const windowSize = useRef(window.innerWidth);
  console.log(windowSize.current);
  return (
    <>
      <Navbar></Navbar>
      <Background></Background>
      {windowSize.current > 800 && <Animations></Animations>}
      {windowSize.current <= 800 && <MobileWebsite />}
    </>
  );
}
export default App;
