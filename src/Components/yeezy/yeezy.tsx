import "../../App.css";
import "./yeezy.css";
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

interface YeezyBootsProps  {
  start: number;
  end: number;
}

const randomOffsets = Array.from({ length: 13 }, () => Math.random() * 100 - 50);
function Yeezy_Boots( {start, end}: YeezyBootsProps) {
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

  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef);

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "0.5"]
  })
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  const [isOpen, setIsOpen] = useState(0);

  return (
    <>
      {yeezyBoots.slice(start, end + 1).map((boots: any, index: number) => (
        <motion.div
          key={boots.id}
          className="slider_img-wrapper"
          variants={parentVariant}
          initial={{ y: randomOffsets[index] }}
          whileHover={{scale: 1.2}}
          // onClick={() => setIsOpen(isOpen[index])}
          ref={ref}
        >
          <motion.img
            key={boots.id}
            src={boots.imgSrc}
            className={"slider_image " + boots.imgClass}
            variants={childVariant}
            initial="initial"
            whileInView={"animate"}
            custom={index}
            ref={inViewRef}
          />
          {/* <motion.div className={"slider_image_desc-wrapper"}
            animate={{
              // opacity: isOpen[index] ? 1 : 0,
            }}
          >
            <h3 className={"boots_title " + boots.titleClass}>{boots.title}</h3>
            <h5 className={"boots_desc " + boots.descClass}>{boots.desc}</h5>
          </motion.div> */}
        </motion.div>
      ))}
    </>
  );
}

function Yeezy() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "0.5"]
  })
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  return (
    <AnimatePresence>
      <motion.div className="yeezy" style={{ scale : scrollYProgress, y: scrollYProgress }}>
        <div className="yeezy_container">
          <div className="yeezy-wrapper">
            <div className="yeezy_pboots_container">
              <h1>Yeezy Collections</h1>
              <button>Read More About Yeezy</button>
            </div>
          </div>
          <div className="yeezy_collections_container">
            <div className="collection-wrapper">
              <div className="collection_slider-wrapper">
                <div className="slider_row-1">
                <Yeezy_Boots start={1} end={4} />
                </div>
                <div className="slider_row-1">
                <Yeezy_Boots start={1} end={4} />
                </div>
              </div>
              <div className="collection_text-wrapper">
                <h2>Yeezy 350v2</h2>
                <h5>350's Are the most popular sneaker collection all time!</h5>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Yeezy;

