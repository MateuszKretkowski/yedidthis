import "./App.css";
import React, { useState, useCallback, useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import NavBar from "./Components/NavBar/navBar.js";
import HeaderSection from "./Components/Header/headerSection.js";
import Biblio from "./Components/Bibliography/biblio.js";
import "./data/Albums/albums.js";
import yeHeaderBG from "./ye_bg6.jpg";
import yeBiblioBG from "./ye_section-bg.png";

function App() {

  return (
    <div className="App">
      <img src={yeHeaderBG} className="ye_bg" />
      <NavBar />
      <HeaderSection />
      <img src={yeBiblioBG} className="ye_bg inverted" />
      <img src={yeBiblioBG} className="ye_bg nextone" />
      <Biblio />
    </div>
  );
}

export default App;
