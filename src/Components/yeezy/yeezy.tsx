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
      x: -100,
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
  const { scrollYProgress: number } = useScroll({
    target: ref,
    offset: ["start end", "0.5"]
  })
  

  const [isOpen, setIsOpen] = useState(0);

  return (
    <>
      {yeezyBoots.slice(start, end + 1).map((boots: any, index: number) => (
        <motion.div
          key={boots.id}
          className="boot-wrapper"
          variants={parentVariant}
          initial={{ y: randomOffsets[index] }}
          whileHover={{scale: 1.2}}
          ref={ref}
        >
          <motion.img
            key={boots.id}
            src={boots.imgSrc}
            className={boots.imgClass + " boot_img"}
            style={{ zIndex: boots.random }}            
            variants={childVariant}
            initial="initial"
            whileInView={"animate"}
            custom={index}
            ref={inViewRef}
          />
        </motion.div>
      ))}
    </>
  );
}

const collectionDescVariant = {
  initial: {
    opacity: 0,
    scale: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: -50,
    transition: {
      delay: 0.4,
      duration: 0.2, type: "tween"
    }
  },
};

const collectionDescVariantReversed = {
  initial: {
    opacity: 0,
    scale: 0,
    y: -700,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: -900,
    transition: {
      delay: 0.4,
      duration: 0.2, type: "tween"
    }
  },
};


const collectionTitleVariant = {
  initial: {
    y: 0
  },
  animate: {
    y: -700,
    transition: { 
    duration: 0.3,         
    type: "spring",
  }
  },
};

function Yeezy() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "0.5"]
  })
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  const [hoverStates, setHoverStates] = useState({
    wrapper1: false,
    wrapper2: false,
    wrapper3: false,
    wrapper4: false,
    wrapper5: false,
    wrapper6: false,
  });

  // Step 2: Handlers for mouse enter and leave for each wrapper
  const handleMouseEnter = (wrapperId: string) => {
    setHoverStates({ ...hoverStates, [wrapperId]: true });
  };
  const handleMouseLeave = (wrapperId: string) => {
    setHoverStates({ ...hoverStates, [wrapperId]: false });
  };


  return (
    <AnimatePresence>
      <motion.div className="yeezy" style={{ translateX: scrollYProgress }}
      >
        <div className="yeezy_container">
          <div className="yeezy-wrapper">
            <div className="title_wrapper">
              <h1>The Most Popular Yeezy Collections</h1>
              <button className="title_button">Read More About Yeezy</button>
            </div>
          </div>
          <div className="yeezy_collections_container">
            <motion.div className="collection-wrapper"
              onMouseEnter={() => handleMouseEnter('wrapper1')}
              onMouseLeave={() => handleMouseLeave('wrapper1')}
              style={{ scale: scrollYProgress }}
            >
              <motion.figure>
                <motion.img src={yeezyBoots[0].imgSrc} className={"img " + yeezyBoots[0].imgClass} />
              </motion.figure>
              <motion.div className="title_container"
              variants={collectionTitleVariant}
              style={{ opacity: hoverStates['wrapper4'] ? 0 : 1, scale: hoverStates['wrapper4'] ? 0 : 1 }}
              initial={"initial"}
              animate={hoverStates['wrapper1'] ? "animate" : "initial"}
              >
                <h1 className="collection_title">Yeezy 350v2</h1>
              </motion.div>
              <motion.div className="desc_container"
              variants={collectionDescVariant}
              initial={"initial"}
              animate={hoverStates['wrapper1'] ? "animate" : "initial"}
              >
                <h4 className="collection_desc">Yeezy 350v2 is the most recognizable shoe in the World. Designed by Kanye West, Created by Adidas</h4>
                <button className="collection_button">Read More About Yeezy 350v2</button>
              </motion.div>
            </motion.div>

            <motion.div className="collection-wrapper"
              onMouseEnter={() => handleMouseEnter('wrapper2')}
              onMouseLeave={() => handleMouseLeave('wrapper2')}
              style={{ scale: scrollYProgress }}
            >
              <motion.figure>
                <motion.img src={yeezyBoots[1].imgSrc} className={"img " + yeezyBoots[1].imgClass} />
              </motion.figure>
              <motion.div className="title_container"
              variants={collectionTitleVariant}
              style={{ opacity: hoverStates['wrapper5'] ? 0 : 1, scale: hoverStates['wrapper5'] ? 0 : 1 }}

              initial={"initial"}
              animate={hoverStates['wrapper2'] ? "animate" : "initial"}
              >
                <h1 className="collection_title frnrs_title">YZY FOAMRNRS</h1>
              </motion.div>
              <motion.div className="desc_container"
              variants={collectionDescVariant}
              initial={"initial"}
              animate={hoverStates['wrapper2'] ? "animate" : "initial"}
              >
                <h4 className="collection_desc">Futuristic, lightweight shoes designed by Kanye West, made from foam with unique breathable cuts</h4>
                <button className="collection_button">Read More About YZY FOAMRUNNERS</button>
              </motion.div>
            </motion.div>

            <motion.div className="collection-wrapper"
              onMouseEnter={() => handleMouseEnter('wrapper3')}
              onMouseLeave={() => handleMouseLeave('wrapper3')}
              style={{ scale: scrollYProgress }}
            >
              <motion.figure>
                <motion.img src={yeezyBoots[2].imgSrc} className={"img " + yeezyBoots[2].imgClass} />
              </motion.figure>
              <motion.div className="title_container"
              variants={collectionTitleVariant}
              style={{ opacity: hoverStates['wrapper6'] ? 0 : 1, scale: hoverStates['wrapper6'] ? 0 : 1 }}

              initial={"initial"}
              animate={hoverStates['wrapper3'] ? "animate" : "initial"}
              >
                <h1 className="collection_title frnrs_title">Yeezy Slides</h1>
              </motion.div>
              <motion.div className="desc_container"
              variants={collectionDescVariant}
              initial={"initial"}
              animate={hoverStates['wrapper3'] ? "animate" : "initial"}
              >
                <h4 className="collection_desc">Minimalist, comfortable slides, crafted from soft EVA foam for casual, stylish wear.</h4>
                <button className="collection_button">Read More About Yeezy Slides</button>
              </motion.div>
            </motion.div>




            <motion.div className="collection-wrapper"
              onMouseEnter={() => handleMouseEnter('wrapper4')}
              onMouseLeave={() => handleMouseLeave('wrapper4')}
              style={{ scale: scrollYProgress }}
            >
              <motion.figure>
                <motion.img src={yeezyBoots[7].imgSrc} className={"img " + yeezyBoots[7].imgClass} />
              </motion.figure>
              <motion.div className="title_container title_4"
              variants={collectionTitleVariant}
              initial={"initial"}
              animate={hoverStates['wrapper4'] ? "initial" : "animate"}
              >
                <h1 className="collection_title collection_title_reversed">Yeezy 450v2</h1>
              </motion.div>
              <motion.div className="desc_container"
              variants={collectionDescVariantReversed}
              initial={"initial"}
              animate={hoverStates['wrapper4'] ? "animate" : "initial"}
              >
                <button className="collection_button">Read More About Yeezy 350v2</button>
                <h4 className="collection_desc">Unique, web-like structure on the midsole, upper primeknit for comfort and style.</h4>
              </motion.div>
            </motion.div>

            <motion.div className="collection-wrapper"
              onMouseEnter={() => handleMouseEnter('wrapper5')}
              onMouseLeave={() => handleMouseLeave('wrapper5')}
              style={{ scale: scrollYProgress }}
            >
              <motion.figure>
                <motion.img src={yeezyBoots[11].imgSrc} className={"img " + yeezyBoots[11].imgClass} />
              </motion.figure>
              <motion.div className="title_container title_4"
              variants={collectionTitleVariant}
              initial={"initial"}
              animate={hoverStates['wrapper5'] ? "initial" : "animate"}
              >
                <h1 className="collection_title collection_title_reversed">Yeezy 500</h1>
              </motion.div>
              <motion.div className="desc_container"
              variants={collectionDescVariantReversed}
              initial={"initial"}
              animate={hoverStates['wrapper5'] ? "animate" : "initial"}
              >
                <button className="collection_button">Read More About Yeezy 500</button>
                <h4 className="collection_desc">Retro silhouette sneakers with mesh adiPRENE+ cushioning for additional comfort.</h4>
              </motion.div>
            </motion.div>

            <motion.div className="collection-wrapper"
              onMouseEnter={() => handleMouseEnter('wrapper6')}
              onMouseLeave={() => handleMouseLeave('wrapper6')}
              style={{ scale: scrollYProgress }}
            >
              <motion.figure>
                <motion.img src={yeezyBoots[12].imgSrc} className={"img " + yeezyBoots[12].imgClass} />
              </motion.figure>
              <motion.div className="title_container collection_title_reversed title_4"
              variants={collectionTitleVariant}
              initial={"initial"}
              animate={hoverStates['wrapper6'] ? "initial" : "animate"}
              >
                <h1 className="collection_title">Yeezy 750v3</h1>
              </motion.div>
              <motion.div className="desc_container"
              variants={collectionDescVariantReversed}
              initial={"initial"}
              animate={hoverStates['wrapper6'] ? "animate" : "initial"}
              >
                <button className="collection_button">Read More About Yeezy 750v3</button>
                <h4 className="collection_desc">Sleek, high-top sneakers. Unique strap and zipper design for a high-fashion look.</h4>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Yeezy;

