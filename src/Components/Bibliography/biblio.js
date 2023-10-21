import "../../App.js";
import "./bibliography.css";
import albums from "../../data/Albums/albums.js";
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
} from "react";
import {
  motion,
  useAnimate,
  AnimatePresence,
  stagger,
  useInView,
} from "framer-motion";

function Biblio() {
  const [scope, animate] = useAnimate();

  let albumInView = false;

  const fadeInAnimationVariants = {
    initial: { scale: 0, y: 200, opacity: 0 },
    animate2: { scale: 1, y: 0, opacity: 1 },
  };

  // const onButtonClick = (albId, vinylCl, cdCl) => {
  //   const alb = document.getElementById(albId)
  //   const vinyl = document.getElementById(vinylCl)
  //   const cd = document.getElementById(cdCl)
  //   animate([
  //     [alb, { scale: 1.5 }, { duration: 0.5, delay: stagger(5) }],
  //     [cd, { x: 200 }, { duration: 2, at: "<"}],
  //     [vinyl, { x: -160 }, { duration: 1, at: "<"}],
  //   ]);
  //   // exit={{
  //   //   [alb, { scale: 1 }, { duration: 0.5, delay: stagger(5) }],
  //   //   [cd, { x: 0 }, { duration: 2, at: "<"}],
  //   //   [vinyl, { x: 0 }, { duration: 1, at: "<"}],
  //   // }}
  // };

  const Modal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(true);

    useImperativeHandle(ref, () => {
      return {
        open: () => setOpen(true),
        close: () => setOpen(false),
      };
    });

    return (
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.6,
                  type: "spring"
                  }
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 0.3,
                },
              }}
              onClick={() => setOpen(false)}
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
                  type: "spring"
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
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="modal-content"
              >
                {props.children}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  });

  const modalRef = useRef();

  return (
    <div className="ow_container" ref={scope}>
      <div className="introduction-wrapper">
        <h1 className="section_title ye_text">YE</h1>
      </div>
      <div className={"albums_container"}>
        {albums.map((album, i) => (
          <>
            <button
              onClick={() => modalRef.current.open()}
              className="modal-button"
            >Open {album.title}</button>
            <Modal ref={modalRef}>
              <motion.div
                key={album.id}
                data-value={album.albumclass}
                // variants={fadeInAnimationVariants}
                // initial="initial"
                // animate={"animate2"}
                // transition={{
                //   type: "spring",
                //   duration: 0.5,
                //   delay: i <= 5 ? 0.3 : 0.38,
                // }}
              >
                <motion.div
                  className={"album " + album.albumclass}
                  id={album.id}
                  // onClick={() => {
                  //   onButtonClick(album.id, album.vinylClass, album.cdClass);
                  // }}
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
                    <h4 className={album.descriptionClass}>
                      {album.description}
                    </h4>
                  </div>
                </motion.div>
              </motion.div>
            </Modal>
          </>
        ))}
      </div>
    </div>
  );
}

export default Biblio;
