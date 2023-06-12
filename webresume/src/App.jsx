import "./App.css";
import Navbar from "./componenets/FirstPage/Navbar";
import Background from "./componenets/FirstPage/Background-animation";
import React from "react";
import Animations from "./Animations";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Background></Background>
      <Animations></Animations>
    </div>
  );
}
export default App;
