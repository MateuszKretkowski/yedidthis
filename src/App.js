import React, { useState, useCallback, useEffect } from "react";
import NavBar from "./Components/NavBar/navBar.js";
import HeaderSection from "./Components/Header/headerSection.js";
import Biblio from "./Components/Bibliography/biblio.js";
import Yeezy from "./Components/yeezy/yeezy.tsx";

import styles from "./App.css";
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
      <div className="section sect2">
        <img src={yeBiblioBG} className="ye_bg inverted" />
        <img src={yeBiblioBG} className="ye_bg nextone" />
        <Biblio />
      </div>
        <Yeezy />
    </div>
  );
}

export default App;
