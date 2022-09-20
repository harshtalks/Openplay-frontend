import { Box } from "@mui/system";
import React from "react";
import AnimeCard from "./AnimeCard";
import AnimeOne from "../../assets/png/saly-1.png";
import AnimeTwo from "../../assets/png/saly-2.png";
import AnimeThree from "../../assets/png/saly-12.png";
import AnimeFour from "../../assets/png/saly-19.png";
import AnimeFive from "../../assets/png/saly-22.png";

const AnimeHigherOrderComp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        gap: "1em",
      }}
    >
      <AnimeCard bg={"#E3C79E"} icon={AnimeThree} mt="4rem" />
      <AnimeCard bg={"#485563"} icon={AnimeOne} mt="2rem" />
      <AnimeCard bg={"#5BB5A2"} icon={AnimeFive} mt="0" />
      <AnimeCard bg={"#485563"} icon={AnimeFour} mt="2rem" />
      <AnimeCard bg={"#E3C79E"} icon={AnimeTwo} mt="4rem" />
    </Box>
  );
};

export default AnimeHigherOrderComp;
