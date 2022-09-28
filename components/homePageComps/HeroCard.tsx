import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

const AnimeCard = ({
  bg,
  icon,
  mt,
}: {
  bg: string;
  icon: StaticImageData;
  mt: string;
}) => {
  return (
    <Box
      sx={{
        width: "250px",
        height: "400px",
        bgcolor: bg,
        borderRadius: "1em",
        mt: mt,
      }}
    >
      <Image src={icon} alt="anime image" />
    </Box>
  );
};

export default AnimeCard;
