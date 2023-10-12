import logo from "./logo.svg";
import "./App.css";
import React, { useState, useCallback, useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

function App() {
  // export const UseTransitionDemoPage = () => {
  //   const [index, setIndex] = useState(0);
  //   const onClick = useCallback(
  //     () => setIndex((state) => (state + 1) % items.length),
  //     []
  //   );
  //   const transitions = useTransition(index, (p) => p, {
  //     from: { opacity: 0, top: 0, left: 0 },
  //     enter: { opacity: 1, top: 50, left: 50 },
  //     leave: { opacity: 0, top: 0, left: 0 },
  //   });

  //   return (
  //     <div className="albums_container" onClick={onClick}>
  //       {transitions.map(({ item, props, key }) => {
  //         const Page = items[item];
  //         return <Page key={key} style={props} />;
  //       })}
  //     </div>
  //   );
  // };

  // <motion.div className="album tcd"
  // whileHover={{scale: 1.1}}
  // whileTap={{scale: 0.9}}
  // transition={{
  // type: "spring",
  // x: { duration: 5 },
  // ref={scope}
  // }}
  // >
  //   <figure className="album_img-wrapper">
  //     <img className="album_vinyl" src={require("./tcd_vinyl.jpg")} />
  //     <img className="album_cd" src={require("./tcd_cd.webp")} />
  //   </figure>
  //   <div className="album_text-wrapper">
  //     <h2>THE COLLEGE DROPOUT</h2>
  //     <h4></h4>
  //   </div>
  // </motion.div>

  const albums = [
    {
      id: 1,
      albumclass: "tcd",
      vinylClass: "tcd_vinyl",
      vinylSrc: "tcd_vinyl.jpg",
      cdSrc: "tcd_cd.webp",
      cdClass: "tcd_cd",
      title: "The College Dropout",
      titleClass: "tcd_title",
      description: "His first album",
      descriptionClass: "tcd_desc",
    },

    {
      id: 2,
      albumclass: "lr",
      vinylClass: "lr_vinyl",
      vinylSrc: "lr_vinyl.webp",
      cdSrc: "lr_cd.png",
      cdClass: "lr_cd",
      title: "Late Registration",
      titleClass: "lr_title",
      description: "His first album",
      descriptionClass: "lr_desc",
    },

    {
      id: 3,
      albumclass: "g",
      vinylClass: "g_vinyl",
      vinylSrc: "g_vinyl.webp",
      cdSrc: "g_cd.png",
      cdClass: "g_cd",
      title: "Graduation",
      titleClass: "g_title",
      description: "His first album",
      descriptionClass: "g_desc",
    },

    {
      id: 4,
      albumclass: "808's",
      vinylClass: "808's_vinyl",
      vinylSrc: "080's_vinyl.jpg",
      cdSrc: "808's_cd.png",
      cdClass: "808's_cd",
      title: "808's and Heartbeak",
      titleClass: "808's_title",
      description: "His first album",
      descriptionClass: "808's_desc",
    },

    {
      id: 5,
      albumclass: "mbdtf",
      vinylClass: "mbdtf_vinyl",
      vinylSrc: "mbdtf_vinyl.jpg",
      cdSrc: "mbdtf_cd.png",
      cdClass: "mbdtf_cd",
      title: "My Beautiful Dark Twisted Fantasy",
      titleClass: "mbdtf_title",
      description: "His first album",
      descriptionClass: "mbdtf_desc",
    },

    {
      id: 6,
      albumclass: "wtt",
      vinylClass: "wtt_vinyl",
      vinylSrc: "wtt_vinyl.jpg",
      cdSrc: "wtt_cd.png",
      cdClass: "wtt_cd",
      title: "Watch The Throne",
      titleClass: "wtt_title",
      description: "His first album",
      descriptionClass: "wtt_desc",
    },

    {
      id: 7,
      albumclass: "yeezus",
      vinylClass: "yeezus_vinyl",
      vinylSrc: "yeezus_vinyl.jpg",
      cdSrc: "yeezus_cd.png",
      cdClass: "yeezus_cd",
      title: "Yeezus",
      titleClass: "yeezus_title",
      description: "His first album",
      descriptionClass: "yeezus_desc",
    },

    {
      id: 8,
      albumclass: "tlop",
      vinylClass: "tlop_vinyl",
      vinylSrc: "tlof_vinyl.jpg",
      cdSrc: "tlof_cd.png",
      cdClass: "tlop_cd",
      title: "The Life of Pablo",
      titleClass: "",
      description: "His first album",
      descriptionClass: "tlop_desc",
    },

    {
      id: 9,
      albumclass: "ye",
      vinylClass: "ye_vinyl",
      vinylSrc: "ye_vinyl.jpg",
      cdSrc: "ye_cd.png",
      cdClass: "ye_cd",
      title: "Ye",
      titleClass: "ye_title",
      description: "His first album",
      descriptionClass: "ye_desc",
    },

    {
      id: 10,
      albumclass: "ksg",
      vinylClass: "ksg_vinyl",
      vinylSrc: "ksg_vinyl.jpeg",
      cdSrc: "ksg_cd.png",
      cdClass: "ksg_cd",
      title: "Kids See Ghosts",
      titleClass: "ksg_title",
      description: "His first album",
      descriptionClass: "ksg_desc",
    },

    {
      id: 11,
      albumclass: "jik",
      vinylClass: "jik_vinyl",
      vinylSrc: "jis_vinyl.jpg",
      cdSrc: "jis_cd.png",
      cdClass: "jik_cd",
      title: "Jesus is King",
      titleClass: "jik_title",
      description: "His first album",
      descriptionClass: "jik_desc",
    },

    {
      id: 12,
      albumclass: "donda",
      vinylClass: "donda_vinyl",
      vinylSrc: "donda_vinyl.jpg",
      cdSrc: "donda_cd.png",
      cdClass: "donda_cd",
      title: "DONDA",
      titleClass: "donda_title",
      description: "His first album",
      descriptionClass: "donda_desc",
    },
  ];

  let albumInView = false;

  const fadeInAnimationVariants = {
    initial: { scale: 0, y: 200, opacity: 0 },
    animate2: { scale: 1, y: 0, opacity: 1 },
  };

  const albumUnCover = {
    animate2: { scale: 1.2, y: 200 },
    leave: { scale: 0, y: 0 },
  };

  // ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION

  const [scope, animate] = useAnimate();
 
  const onButtonClick = () => {
    animate([
      [".album", { x: 50 }, { duration: 1, delay: stagger(0.05) }],
      [".album_cd", { x: -10 }, { duration: 2 }],
      [".album_vinyl", { x: 10 }, { duration: 2, at: "<" }],
    ]);
  };

  // ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION

  return (
    <div className="App">
      <img src={require("./ye_bg6.jpg")} className="ye_bg" />
      <div className="navBar">
        <div className="navBar_container">
          <h3 className="navbar_link">MENU</h3>
          <img src={require("./ye_logo.png")} className="ye_logo" />
          <h3 className="navbar_link">SETTINGS</h3>
        </div>
      </div>
      <header>
        {/* <div className="header_container"> */}
        {/* <h1 className="header_title">kanYe West</h1> */}
        {/* <h4 className="header_subtitle">" If you're a fan of <span className="text_glow cartoony">Ye</span>, you're a fan of <span className="text_glow cartoony">Yourself</span> "</h4> */}
        {/* <div className="scroll" /> */}
        {/* </div> */}
      </header>
      {/* <section className="who">
        <div className="who_container">
          <div></div>
        </div>
      </section> */}
      <section className="ow">
      
        <img src={require("./ye_section-bg.png")} className="ye_bg inverted" />
        <img src={require("./ye_section-bg.png")} className="ye_bg nextone" />
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
                    <h4 className={album.descriptionClass}>
                      {album.description}
                    </h4>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
