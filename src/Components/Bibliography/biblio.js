import "../../App.css";
import "./bibliography.css";
import albums from "../../data/Albums/albums.js";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  stagger,
} from "framer-motion";

function Biblio() {
  const [modalOpen, setModalOpen] = useState(Array(albums.length).fill(false));

  const openModal = (index) => {
    setModalOpen(modalOpen.map((value, i) => (i === index ? true : value)));
  };

  const closeModal = (index) => {
    setModalOpen(modalOpen.map((value, i) => (i === index ? false : value)));
  };

  const Modal = ({ isOpen, onClose, album }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  type: "spring",
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 0.3,
                },
              }}
              onClick={onClose}
              className="modal-backdrop"
            />
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                y: 200,
                transition: {
                  duration: 0.3,
                  type: "spring",
                },
              }}
              exit={{
                scale: 0,
                transition: {
                  delay: 0.3,
                },
              }}
              className="modal-content-wrapper"
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.15,
                    duration: 3,
                    type: "spring",
                  },
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="modal-content"
              >
                <div className={"album " + album.albumclass} id={album.id}>
                  <motion.figure className="album_img-wrapper">
                    <motion.img
                      initial={{
                      }}
                      animate={{
                        transition: { duration: .5},
                       }}
                      className={"album_vinyl " + album.vinylClass}
                      id={album.vinylClass}
                      src={album.vinylSrc}
                      alt="Vinyl"
                    />
                    <motion.img
                      className={"album_cd " + album.cdClass}
                      id={album.cdClass}
                      src={album.cdSrc}
                      initial={{
                      }}
                      animate={{
                        transition: { duration: .3, delay: .3, type: "spring"},
                       }}
                      alt="CD"
                    />
                  </motion.figure>
                  <motion.div className="album_text-wrapper">
                    <motion.h2 className={album.titleClass + " album_title"}
                    initial={{
                      x: 0,
                      y: -100,
                      opacity: 0,
                      scale: 0
                    }}
                    animate={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 1.5,
                      transition: { duration: 0.2, delay: .8, type: "spring"},
                    }}
                    >
                      {album.title}
                    </motion.h2>
                    <motion.h4 className={album.descriptionClass + " album_subtitle"}
                    initial={{
                      x: 0,
                      opacity: 0,
                      scale: 0
                    }}
                    animate={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.2, delay: 1.1, type: "spring"},
                    }}
                    >
                      {album.description}
                    </motion.h4>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="ow_container">
      <div className="introduction-wrapper">
        <h1 className="section_title ye_text">YE</h1>
      </div>
      <div className="albums_container">
        {albums.map((album, index) => (
          <div key={album.id}>
            <button
              onClick={() => openModal(index)}
              className={`modal-button${modalOpen[index] ? " hidden" : ""}`}
            >
              <img src={album.vinylSrc} className="button_img" alt={album.title}></img>
            </button>
            <Modal
              isOpen={modalOpen[index]}
              onClose={() => closeModal(index)}
              album={album}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Biblio;