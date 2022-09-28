/* eslint-disable @next/next/no-img-element */
import { Avatar, Button, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SingularData } from "../../types/remoteDataTypes";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const FaucetCard = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        mt: 3,
        background: "#fff",
        width: "240px",
        height: "300px",
        py: 2,
        px: 2,
        borderRadius: "8px",
      }}
    >
      <Avatar sx={{ mb: 2, background: "#F79AD3", opacity: 0.8, p: 2 }}>
        <CurrencyExchangeIcon />
      </Avatar>
      <Typography fontWeight={700} sx={{ mb: 1 }} variant="h6">
        Need Faucets?
      </Typography>
      <Typography
        sx={{ mb: 2 }}
        fontWeight={200}
        fontSize={".7rem"}
        variant="body1"
      >
        If you need some testnet ETH, you can get it by clicking on the button
        given below. It will take you to manually verified faucet website for
        the goerli testnet.
      </Typography>
      <Button
        onClick={() => {
          window.open("https://faucets.chain.link/", "_blank");
        }}
        variant="outlined"
      >
        Faucet Link
      </Button>
    </Box>
  );
};

export default FaucetCard;
