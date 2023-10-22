import "../../App.js";
import "./bibliography.css";
import albums from "../../data/Albums/albums.js";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Biblio() {
  const [modalOpen, setModalOpen] = useState(Array(albums.length).fill(false));

  const openModal = (index) => {
    const updatedModalOpen = modalOpen.map((value, i) => (i === index ? true : value));
    setModalOpen(updatedModalOpen);
  };

  const closeModal = (index) => {
    const updatedModalOpen = modalOpen.map((value, i) => (i === index ? false : value));
    setModalOpen(updatedModalOpen);
  };

  return (
    <div className="ow_container">
      <div className="introduction-wrapper">
        <h1 className="section_title ye_text">YE</h1>
      </div>
      <div className="albums_container">
        {albums.map((album, index) => (
          <div key={album.id}>
            <button onClick={() => openModal(index)} className="modal-button">
              Open {album.title}
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

const Modal = ({ isOpen, onClose, album }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.6,
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
              transition: {
                duration: 0.3,
                type: "spring",
              },
            }}
            exit={{
              transition: {
                delay: 0.3,
              },
            }}
            className="modal-content-wrapper"
          >
            <motion.div
              initial={{
                opacity: 1,
                scale: 1,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1.2,
                transition: {
                  delay: 0.15,
                  duration: 0.3,
                  type: "spring",
                },
              }}
              exit={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              className="modal-content"
            >
              <div className={"album " + album.albumclass} id={album.id}>
                <figure className="album_img-wrapper">
                  <img
                    className={"album_vinyl " + album.vinylClass}
                    id={album.vinylClass}
                    src={album.vinylSrc}
                    alt="Vinyl"
                  />
                  <img
                    className={"album_cd " + album.cdClass}
                    id={album.cdClass}
                    src={album.cdSrc}
                    alt="CD"
                  />
                </figure>
                <div className="album_text-wrapper">
                  <h2 className={album.titleClass}>{album.title}</h2>
                  <h4 className={album.descriptionClass}>{album.description}</h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};

export default Biblio;
