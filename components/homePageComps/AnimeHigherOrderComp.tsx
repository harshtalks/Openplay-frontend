import { Box } from "@mui/system";
import React from "react";
import AnimeCard from "./AnimeCard";
import AnimeOne from "../../assets/svg/saly-1.svg";
import AnimeTwo from "../../assets/svg/saly-2.svg";
import AnimeThree from "../../assets/svg/saly-8.svg";
import AnimeFour from "../../assets/svg/saly-10.svg";
import AnimeFive from "../../assets/svg/saly-12.svg";

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
