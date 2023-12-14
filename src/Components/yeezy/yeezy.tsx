import "../../App.css";
import "./yeezy.css";
import "../../data/yeezyBoots.js";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, animate, stagger, useAnimate } from "framer-motion";

function Yeezy() {


  return (
    <>
      <div className="yeezy">
        <div className="yeezy_container">
          <div className="yeezy-wrapper">

            <div className="yeezy_pboots_container">
              <h1>The Most Popular Yeezy Collections</h1>

              <button>
                Read More About Yeezy
              </button>
            </div>

          </div>

          <div className="slider_container">
            <div className="slider-area">
              <motion.div className="slider_row-1">
                <motion.img whileHover={{scale: 1.2,}} className="slider_image" />
                <motion.img whileHover={{scale: 1.2,}} className="slider_image" />
                <motion.img whileHover={{scale: 1.2,}} className="slider_image" />
                <motion.img whileHover={{scale: 1.2,}} className="slider_image" />
                <motion.img whileHover={{scale: 1.2,}} className="slider_image" />
                <motion.img whileHover={{scale: 1.2,}} className="slider_image" />
              </motion.div>
              <motion.div className="slider_row-1">
              <motion.img whileHover={{scale: 1.2,}} className="slider_image" />
                <motion.img whileHover={{scale: 1.2,}} className="slider_image" />
                <motion.img whileHover={{scale: 1.2,}} className="slider_image" />
                <motion.img whileHover={{scale: 1.2,}} className="slider_image" />
                <motion.img whileHover={{scale: 1.2,}} className="slider_image" />
                <motion.img whileHover={{scale: 1.2,}} className="slider_image" />
              </motion.div>
            </div>
            <div className="slider-area">

              <motion.div className="slider_row-2">
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
              </motion.div>
              <motion.div className="slider_row-2">
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Yeezy;
