import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AnimeHigherOrderComp from "./AnimeHigherOrderComp";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  return (
    <Box sx={{ bgcolor: "#E8F2EE", height: "90vh", position: "relative" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box sx={{ marginTop: "15rem" }}>
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
            All your favorite Anime and Manga in one place.
          </Typography>
          <Typography
            textAlign={"center"}
            gutterBottom
            sx={{ width: "60%", margin: "0 auto" }}
          >
            The world isn’t perfect. But it’s there for us, doing the best it
            can… that’s what makes it so damn beautiful.
          </Typography>
          <Stack
            margin={"1rem 0"}
            direction={"row"}
            justifyContent="center"
            spacing={3}
          >
            <Button
              onClick={() => router.push("/list")}
              sx={{ color: "#ffffff" }}
              variant="contained"
            >
              Check Out List
            </Button>
            <Button
              onClick={() =>
                router.push(
                  "https://chandan-02.github.io/anime-facts-rest-api/"
                )
              }
              endIcon={<ArrowForwardIcon />}
            >
              Anime API Docs
            </Button>
          </Stack>
          <Box sx={{ marginTop: "4rem" }}>
            <AnimeHigherOrderComp />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
