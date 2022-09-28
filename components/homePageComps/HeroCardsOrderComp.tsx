import { Box } from "@mui/system";
import React from "react";
import AnimeCard from "./HeroCard";
import AnimeOne from "../../assets/png/Saly-1.png";
import AnimeTwo from "../../assets/png/Saly-2.png";
import AnimeThree from "../../assets/png/Saly-12.png";
import AnimeFour from "../../assets/png/Saly-19.png";
import AnimeFive from "../../assets/png/Saly-22.png";
import { animate, motion } from "framer-motion";

const AnimeHigherOrderComp = () => {
  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "1em",
      }}
    >
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0, transition: { duration: 0.5, delay: 1.4 } }}
      >
        <AnimeCard bg={"#E3C79E"} icon={AnimeThree} mt="4rem" />
      </motion.div>
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0, transition: { duration: 0.5, delay: 1.2 } }}
      >
        <AnimeCard bg={"#485563"} icon={AnimeOne} mt="2rem" />
      </motion.div>
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0, transition: { duration: 0.5, delay: 1 } }}
      >
        <AnimeCard bg={"#5BB5A2"} icon={AnimeFive} mt="0" />
      </motion.div>
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0, transition: { duration: 0.5, delay: 1.2 } }}
      >
        <AnimeCard bg={"#485563"} icon={AnimeFour} mt="2rem" />
      </motion.div>
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0, transition: { duration: 0.5, delay: 1.4 } }}
      >
        <AnimeCard bg={"#E3C79E"} icon={AnimeTwo} mt="4rem" />
      </motion.div>
    </motion.div>
  );
};

export default AnimeHigherOrderComp;
