import { Alert, Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Mapbase from "../../assets/svg/mapbase.svg";

const RaffleHeroSection = () => {
  return (
    <Box>
      <Box
        sx={{ display: "grid", justifyContent: "center", position: "relative" }}
      >
        <Box sx={{ mt: 6 }}>
          <Typography
            textAlign={"center"}
            gutterBottom
            sx={{ fontSize: "0.75rem", letterSpacing: "0.5em" }}
            textTransform={"uppercase"}
            variant="body2"
          >
            WEB3 | DAPP
          </Typography>
          <Typography
            gutterBottom
            textAlign={"center"}
            variant="h4"
            fontWeight={800}
          >
            Decentralized Lottery Web3 App on Goerli.
          </Typography>
          <Alert sx={{ mt: 1 }} severity="success">
            All the transactions made by you during the game will be avaialable
            on Goerli testnet&apos;s etherscan page.
          </Alert>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "50%",
          bgColor: "red",
          zIndex: "-1",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image
          src={Mapbase}
          alt="mapbase"
          width={1000}
          height={1000}
          layout="fixed"
        />
      </Box>
    </Box>
  );
};

export default RaffleHeroSection;
