import "../../App.css";
import "./yeezy.css";
import yeezyBoots from "../../data/yeezyBoots.tsx";
import React, { useEffect, useState, useRef } from "react";
import {
  useScroll,
  useInView,
  motion,
  AnimatePresence,
  animate,
  stagger,
  useAnimate,
} from "framer-motion";

function Yeezy() {
  const parentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  const childVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * index,
      }
    }),
  };

  const randomOffsets = Array.from({ length: 13 }, () => Math.random() * 250 - 125);

  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isOpen, setIsOpen] = useState(false)
  const Yeezy_Boots = () => {

    return (
      <>
        {yeezyBoots.map((boots: any, index: any) => (
          <motion.div
            key={boots.id}
            className="slider_img-wrapper"
            variants={parentVariant}
            initial={{ y: randomOffsets[index] }}
            whileHover={{scale: 1.2}}
            onClick={() => setIsOpen(!isOpen)}
            ref={ref}
          >
            <motion.img
              key={boots.id}
              src={boots.imgSrc}
              className={"slider_image " + boots.imgClass}
              variants={childVariant}
              initial="initial"
              animate={"animate"}
              custom={index}
            />
            <motion.div className={"slider_image_desc-wrapper"}
            animate={{
              opacity: isOpen ? 1 : 0,

            }}
            >
                <h3 className={"boots_title " + boots.titleClass}>{boots.title}</h3>
                <h5 className={"boots_desc " + boots.descClass}>{boots.desc}</h5>
            </motion.div>
          </motion.div>
        ))}
      </>
    );
  };
  return (
    <>
      <div className="yeezy">
        <div className="yeezy_container">
          <div className="yeezy-wrapper">
            <div className="yeezy_pboots_container">
              <h1>Yeezy Collections</h1>

              <button>Read More About Yeezy</button>
            </div>
          </div>

          <div className="slider_container">
            <div className="slider-area" ref={ref}>
              <motion.div className="slider_row-1">
                <Yeezy_Boots />
              </motion.div>
              <motion.div className="slider_row-1">
                <Yeezy_Boots />
              </motion.div>
            </div>
            {/* THERE WILL BE A SECOND AND THIRD SLIDER */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Yeezy;
