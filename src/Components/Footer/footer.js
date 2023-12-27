import "../../App.css";
import "./footer.css";
import yeezyBoots from "../../data/yeezyBoots.tsx";
import React, { useEffect, useState, useRef, Children } from "react";
import {
  useSpring, 
  useScroll,
  useInView,
  motion,
  AnimatePresence,
  animate,
  stagger,
  useAnimate,
  useMotionValueEvent,
  inView
} from "framer-motion";
import yeLogo from "../../ye_logo.png";


function Footer() {

    return(
        <div className="footer">
            <div className="footer-container">
                <div className="title_container">
                    <a href={'#navbar'}><img src={yeLogo} className="ye_logo-footer" /></a>
                </div>

                <div><h5>DESIGNED & CODED BY MATEUSZ KRETKOWSKI</h5></div>
                <div><a href={'https://mateuszkretkowski.github.io/Final-Portfolio/#'} target="_blank"><h5>CONTACT MATEUSZ</h5></a></div>
                <div><a href={'https://twitter.com/kanyewest'} target="_blank"><h5>YE'S TWITTER</h5></a></div>
            </div>
        </div>
    )
};

export default Footer;