import "../../App.css";
import "./yeezy.css";
import "../../data/yeezyDayNews.js";
import React, { useState } from "react";
import { motion, AnimatePresence, animate, stagger } from "framer-motion";
import yeezyNews from "../../data/yeezyDayNews.js";
import yeezyBG from "../../Images/yeezy_boots/blurryGradient.svg";
import yeezyScrshot from "../../Images/yeezy_boots/blurry6.svg";
import { wrap } from "popmotion";

import yzy350_ashstone from "../../Images/yeezy_boots/yeezy350_ashstone.jpg";
import yzy350_onyx from "../../Images/yeezy_boots/yeezy350_onyx.jpg";
import yzy350_white from "../../Images/yeezy_boots/yeezy350_white.jpg";
import yzy350_zebra from "../../Images/yeezy_boots/yeezy350_zebra.jpg";

function Yeezy() {
  const Modal = ({ isOpen, onClose, yeezyNews }) => {
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
              className="modal-backdrop-yzy"
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
              className="modal-content-wrapper-yzy"
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    duration: 3,
                    type: "spring",
                  },
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.7,
                  },
                }}
                className="modal-content-yzy"
              >
                <motion.div className="news_container">
                  <motion.div className="yzy_modal_photo-collection">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.img
                        key={page}
                        src={yzyPhotos[imageIndex]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);

                          if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                          } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                          }
                        }}
                      />
                      <div className="next" onClick={() => paginate(1)}>
                        {">"}
                      </div>
                      <div className="prev" onClick={() => paginate(-1)}>
                        {"<>>"}
                      </div>
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const yzyPhotos = [yzy350_ashstone, yzy350_onyx, yzy350_white];

  const imageIndex = wrap(0, yzyPhotos.length, page);

  const [modalOpen, setModalOpen] = useState(
    Array(yeezyNews.length).fill(false)
  );

  const openModal = (index) => {
    setModalOpen(modalOpen.map((value, i) => (i === index ? true : value)));
  };

  const closeModal = (index) => {
    setModalOpen(modalOpen.map((value, i) => (i === index ? false : value)));
  };

  return (
    <>
      <div className="yeezy">
        <img src={yeezyScrshot} className="yeezy_bg"></img>
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
            {yeezyNews.map((News, index) => (
              <div key={News.id}>
                <button
                  onClick={() => openModal(index)}
                  className={`modal-button-yzy${
                    modalOpen[index] ? " hidden" : ""
                  }`}
                >
                  <img
                    src={News.imgSrc}
                    className="button_img-yzy"
                    alt={News.title}
                  ></img>
                </button>
                <Modal
                  isOpen={modalOpen[index]}
                  onClose={() => closeModal(index)}
                   yeezyNews={News}
                />
              </div>
            ))}
          </div>

          <div className="yeezy_line" />
        </div>
      </div>
    </>
  );
}

export default Yeezy;
