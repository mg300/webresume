import Navbar from "./componenets/FirstPage/Navbar";
import Background from "./componenets/FirstPage/Background-animation";
import React, { useEffect, useState } from "react";
import Animations from "./Animations";
import MobileWebsite from "./MobileWebsite";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  console.log(windowSize.current);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Background></Background>
      {windowSize > 800 && <Animations></Animations>}
      {windowSize <= 800 && <MobileWebsite />}
    </>
  );
}

export default App;
