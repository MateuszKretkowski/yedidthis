import "../../App.css";
import "./yeezy.css";
import "../../data/yeezyPhotos.js";
import React, { useState } from "react";
import { motion, AnimatePresence, animate, stagger } from "framer-motion";
import yeezyPhotos from "../../data/yeezyPhotos.js";
import yeezyBG from "../../Images/yeezy_boots/blurryGradient.svg";
import yeezyScrshot from "../../Images/yeezy_boots/blurry6.svg";

function Yeezy() {

    // const Modal = ({ isOpen, onClose, album }) => {
  //   return (
  //     <AnimatePresence>
  //       {isOpen && (
  //         <div>
  //           <motion.div
  //             initial={{
  //               opacity: 0,
  //             }}
  //             animate={{
  //               opacity: 1,
  //               transition: {
  //                 type: "spring",
  //               },
  //             }}
  //             exit={{
  //               opacity: 0,
  //               transition: {
  //                 delay: 0.3,
  //               },
  //             }}
  //             onClick={onClose}
  //             className="modal-backdrop"
  //           />
  //           <motion.div
  //             initial={{
  //               scale: 0,
  //             }}
  //             animate={{
  //               scale: 1,
  //               y: 200,
  //               transition: {
  //                 duration: 0.3,
  //                 type: "spring",
  //               },
  //             }}
  //             exit={{
  //               scale: 0,
  //               transition: {
  //                 delay: 0.3,
  //               },
  //             }}
  //             className="modal-content-wrapper"
  //           >
  //             <motion.div
  //               initial={{
  //                 opacity: 0,
  //               }}
  //               animate={{
  //                 opacity: 1,
  //                 transition: {
  //                   delay: 0.2,
  //                   duration: 3,
  //                   type: "spring",
  //                 },
  //               }}
  //               exit={{
  //                 scale: 0,
  //                 opacity: 0,
  //                 transition: {
  //                   duration: 0.7,
  //                 },
  //               }}
  //               className="modal-content"
  //             >
  //               <div className="news_container">
  //                 {/* <div> YEEZY DAY NEWS HERE </div> */}
  //               </div>
  //             </motion.div>
  //           </motion.div>
  //         </div>
  //       )}
  //     </AnimatePresence>
  //   );
  // };

  // const [modalOpen, setModalOpen] = useState(Array(albums.length).fill(false));

  // const openModal = (index) => {
  //   setModalOpen(modalOpen.map((value, i) => (i === index ? true : value)));
  // };

  // const closeModal = (index) => {
  //   setModalOpen(modalOpen.map((value, i) => (i === index ? false : value)));
  // };

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
              Yeezy is a clothing company created by Kanye West in collaboration
              with Adidas.
            </h3>
          </div>

          <div className="yeezy_days-wrapper">
            <div className="yeezy_day">

            </div>
            <div className="yeezy_day">

            </div>
            <div className="yeezy_day">

            </div>
          </div>

          <div className="yeezy_line" />
        </div>
      </div>
    </>
  );
}

export default Yeezy;
