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
          <div className="yeezy_title-wrapper">
            <h1 className="yeezy_title">YEEZY</h1>
          </div>

          <div className="yeezy_desc-wrapper">
            <h3 className="yeezy_desc">
              <h6 className="yzy_p yzy_p-1">
                Yeezy is Known for its futuristic approach to design,
              </h6>
              <br />
              <h6 className="yzy_p yzy_p-2">
                Yeezy offers unique and innovative patterns that blend
                streetwear with elements of high fashion.
              </h6>
              <br />{" "}
              <h6 className="yzy_p yzy_p-3">
                Characterized by a minimalist style, refined color schemes, and
                the incorporation of advanced technologies.
              </h6>
            </h3>
          </div>

          <div className="yeezy_days-wrapper">
            
          </div>

          <div className="yeezy_line" />
        </div>
      </div>
    </>
  );
}

export default Yeezy;