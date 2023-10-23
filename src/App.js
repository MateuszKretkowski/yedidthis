import styles from "./App.css";
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
    <div className="container">
      <div className="section">
      <NavBar />
        <img src={yeHeaderBG} className="ye_bg-header" />
        <HeaderSection />  
      </div>
      <div className="section">
        <img src={yeBiblioBG} className="ye_bg inverted" />
        <img src={yeBiblioBG} className="ye_bg nextone" />
        <Biblio />
      </div>
    </div>
  );
}

export default App;
