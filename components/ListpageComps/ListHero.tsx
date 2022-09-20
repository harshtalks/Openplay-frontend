import { Alert, Box, Typography } from "@mui/material";
import React from "react";

const ListHero = () => {
  return (
    <Box>
      <Box sx={{ display: "grid", justifyContent: "center" }}>
        <Box sx={{ mt: 6 }}>
          <Typography
            textAlign={"center"}
            gutterBottom
            sx={{ fontSize: "0.75rem", letterSpacing: "0.5em" }}
            textTransform={"uppercase"}
            variant="body2"
          >
            MANGA | ANIME
          </Typography>
          <Typography
            gutterBottom
            textAlign={"center"}
            variant="h4"
            fontWeight={800}
          >
            List of all the Anime, Really.
          </Typography>
          <Alert sx={{ mt: 1 }} severity="success">
            Click on any of the anime listed below to get all the cool anime
            facts
          </Alert>
        </Box>
      </Box>
    </Box>
  );
};

export default ListHero;
