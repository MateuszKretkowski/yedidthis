import "../../App.js";
import "./bibliography.css";
import albums from "../Albums/albums.js"
import React, { useState, useCallback, useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

function Biblio() {

  let albumInView = false;

  const fadeInAnimationVariants = {
    initial: { scale: 0, y: 200, opacity: 0 },
    animate2: { scale: 1, y: 0, opacity: 1 },
  };

  const albumUnCover = {
    animate2: { scale: 1.2, y: 200 },
    leave: { scale: 0, y: 0 },
  };

  const [scope, animate] = useAnimate();
 
  const onButtonClick = () => {
    animate([
      [".album", { x: 50 }, { duration: 1, delay: stagger(0.05) }],
      [".album_cd", { x: -10 }, { duration: 2 }],
      [".album_vinyl", { x: 10 }, { duration: 2, at: "<" }],
    ]);
  };

  return (
    <div className="ow_container">
      <div className="introduction-wrapper">
        <h1 className="section_title ye_text">YE</h1>
      </div>
      <div className={"albums_container"}>
        {albums.map((album, i) => (
          <motion.div
            ref={scope}
            key={album.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate2"
            viewport={{ once: false }}
            transition={{
              type: "spring",
              duration: 0.5,
              duration: 0.3,
              delay: i <= 5 ? (i = 0.3) : (i = 0.38),
            }}
          >
            <motion.div
              className={"album " + album.className}
              key={album.id}
              onClick={onButtonClick()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <figure className="album_img-wrapper">
                <img
                  className={"album_vinyl " + album.vinylClass}
                  src={require("./" + album.vinylSrc)}
                />
                <img
                  className={"album_cd " + album.cdClass}
                  src={require("./" + album.cdSrc)}
                />
              </figure>
              <div className="album_text-wrapper">
                <h2 className={album.titleClass}>{album.title}</h2>
                <h4 className={album.descriptionClass}>{album.description}</h4>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Biblio;
