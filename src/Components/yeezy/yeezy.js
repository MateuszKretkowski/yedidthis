import "../../App.css";
import "./yeezy.css";
import "../../data/yeezyPhotos.js";
import React, { useState } from "react";
import { motion, AnimatePresence, animate, stagger } from "framer-motion";
import yeezyPhotos from "../../data/yeezyPhotos.js";
import yeezyBG from "../../Images/yeezy_boots/yeezy_bg6.jpg";

function Yeezy() {
  return (
    <div className="yeezy">
      <img src={yeezyBG} className="yeezy_bg" />
      <div className="yeezy_container">
        <h1 className="section_title">YEEZY</h1>
        <div className="photos_wrapper">
          {yeezyPhotos.map((yzyPhoto, index) => (
            <figure className="yzy_img-wrapper">
              <img
                src={yzyPhoto.imgSrc}
                className={"yzy_img " + yzyPhoto.imgClass}
              ></img>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Yeezy;
