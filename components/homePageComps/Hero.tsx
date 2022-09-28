import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AnimeHigherOrderComp from "./HeroCardsOrderComp";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

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
            Web3 dapp
          </Typography>
          <Typography
            gutterBottom
            textAlign={"center"}
            variant="h4"
            fontWeight={800}
          >
            Decentralized Lottery Web3 App
          </Typography>
          <Typography
            textAlign={"center"}
            gutterBottom
            sx={{ width: "60%", margin: "0 auto" }}
          >
            Play a completely decentralized raffle (lottery) app based on
            Ethereum and its smart contracts without any human intervention.
          </Typography>
          <Stack
            margin={"1rem 0"}
            direction={"row"}
            justifyContent="center"
            spacing={3}
          >
            <Button
              variant="contained"
              sx={{ color: "#fff" }}
              onClick={() => router.push("/raffle")}
            >
              Enter the Raffle
            </Button>
            <Button
              onClick={() =>
                router.push(
                  "https://chandan-02.github.io/anime-facts-rest-api/"
                )
              }
              endIcon={<ArrowForwardIcon />}
            >
              Web3 Backend
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
