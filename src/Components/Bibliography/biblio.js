import "../../App.js";
import "./bibliography.css";
import albums from "../../data/Albums/albums.js";
import React, { useState } from "react";
import { motion, useAnimate, stagger, useInView } from "framer-motion";

function Biblio() {
  const [scope, animate] = useAnimate();

  let albumInView = false;

  const fadeInAnimationVariants = {
    initial: { scale: 0, y: 200, opacity: 0 },
    animate2: { scale: 1, y: 0, opacity: 1 },
  };

  const onButtonClick = (albId, vinylCl, cdCl) => {
    const alb = document.getElementById(albId)
    const vinyl = document.getElementById(vinylCl)
    const cd = document.getElementById(cdCl)
    animate([
      [alb, { scale: 1.5 }, { duration: 0.5, delay: stagger(5) }],
      [cd, { x: 200 }, { duration: 2, at: "<"}],
      [vinyl, { x: -160 }, { duration: 1, at: "<"}],
    ]);
    exit={{
      [alb, { scale: 1 }, { duration: 0.5, delay: stagger(5) }],
      [cd, { x: 0 }, { duration: 2, at: "<"}],
      [vinyl, { x: 0 }, { duration: 1, at: "<"}],
    }}
  };


  return (
    <div className="ow_container" ref={scope}>
      <div className="introduction-wrapper">
        <h1 className="section_title ye_text">YE</h1>
      </div>
      <div className={"albums_container"}>
        {albums.map((album, i) => (
          <motion.div
            key={album.id}
            data-value={album.albumclass}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate={"animate2"}
            transition={{
              type: "spring",
              duration: 0.5,
              duration: 0.3,
              delay: i <= 5 ? 0.3 : 0.38,
            }}
          >
            <motion.div
              className={"album " + album.albumclass}
              id={album.id}
              onClick={() => {
                onButtonClick(album.id, album.vinylClass, album.cdClass);
                onButtonClick.pause()
              }}
              whileTap={{ scale: 0.9 }}
            >
              <figure className="album_img-wrapper">
                <img
                  className={"album_vinyl " + album.vinylClass}
                  id={album.vinylClass}
                  src={album.vinylSrc}
                />
                <img
                  className={"album_cd " + album.cdClass}
                  id={album.cdClass}
                  src={album.cdSrc}
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
