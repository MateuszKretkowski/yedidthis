import "../../App.css";
import "./yeezy.css";
import "../../data/yeezyDayNews.js";
import React, { useState } from "react";
import { motion, AnimatePresence, animate, stagger } from "framer-motion";

function Yeezy() {
  return (
    <>
      <div className="yeezy">
        <div className="yeezy_container">
          <div className="yeezy-wrapper">

            <div className="yeezy_pboots_container">
              <h1>The Most Popular Yeezy Collections</h1>

              <ul className="yeezy_pboots-wrapper">
                <li className="yeezy_pboots">
                  <img
                    src="../../Images/yeezy_boots/yeezy350_onyx.jpg"
                    className="yeezy_pboots_img yeezy_pboots_img-first"
                  />
                </li>

                <li className="yeezy_pboots">
                  <img
                    src="../../Images/yeezy_boots/yeezy350_onyx.jpg"
                    className="yeezy_pboots_img yeezy_pboots_img-second"
                  />
                </li>

                <li className="yeezy_pboots">
                  <img
                    src="../../Images/yeezy_boots/yeezy350_onyx.jpg"
                    className="yeezy_pboots_img yeezy_pboots_img-third"
                  />
                </li>
              </ul>
            </div>

            <div className="yeezy_title-wrapper">
              <h1 className="yeezy_title">YEEZY</h1>

              <h3 className="yeezy_desc">
                Yeezy is Known for its futuristic approach to design, Yeezy
                offers unique and innovative patterns that blend streetwear with
                elements of high fashion. Characterized by a minimalist style,
                refined color schemes, and the incorporation <p className="yeezy_desc-p"> of</p>
                <p className="yeezy_desc-p"> advanced</p> <p className="yeezy_desc-p"> technologies</p>
                <p className="yeezy_desc-p">...</p>
              </h3>
            </div>
          </div>

          <div className="slider_container">
            <div className="slider-area">
              <div className="slider_row-1">
                <img className="slider_image" />
                <img className="slider_image" />
                <img className="slider_image" />
                <img className="slider_image" />
                <img className="slider_image" />
                <img className="slider_image" />
              </div>
              <div className="slider_row-2">
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
                <img className="slider_image reversed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Yeezy;
