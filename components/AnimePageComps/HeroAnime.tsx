import { Alert, Box, Chip, Typography } from "@mui/material";
import React from "react";
import useAnimeFacts from "../../hooks/useAnimeFacts";

const HeroAnime = ({ id }: { id: string }) => {
  return (
    <Box>
      <Box sx={{ display: "grid", justifyContent: "center" }}>
        <Box sx={{ mt: 6, textAlign: "center" }}>
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
            Facts of Your Favorite Anime
          </Typography>
          <Chip
            label={id
              .replace("_", " ")
              .split(" ")
              .map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase())
              .join(" ")}
            color="primary"
            variant="outlined"
            sx={{
              mb: 1,
              mx: "auto",
              borderRadius: "25px",
              fontWeight: "800",
              fontSize: "2rem",
              padding: "2rem 1rem",
            }}
          />
          <Alert sx={{ mt: 1 }} severity="success">
            Scroll down to see more facts of your fav anime.
          </Alert>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroAnime;
