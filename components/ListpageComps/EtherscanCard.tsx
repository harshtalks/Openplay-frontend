/* eslint-disable @next/next/no-img-element */
import { Avatar, Button, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SingularData } from "../../types/remoteDataTypes";
import AddchartIcon from "@mui/icons-material/Addchart";

const EtherscanCard = () => {
  const address = process.env.NEXT_PUBLIC_ADDRESS as string;
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
      <Avatar sx={{ mb: 2, background: "#A491D3", opacity: 0.8, p: 2 }}>
        <AddchartIcon />
      </Avatar>
      <Typography fontWeight={700} sx={{ mb: 1 }} variant="h6">
        Smart Contract
      </Typography>
      <Typography
        sx={{ mb: 2 }}
        fontWeight={200}
        fontSize={".7rem"}
        variant="body1"
      >
        The smart contract used for the verification and validation of this Dapp
        is deployed on Goerli testnet as of now. You can view the contract
        details and implementation on Etherscan.io.
      </Typography>
      <Button
        onClick={() => {
          window.open(
            `https://goerli.etherscan.io/address/${address}`,
            "_blank"
          );
        }}
        variant="outlined"
      >
        Etherscan.io
      </Button>
    </Box>
  );
};

export default EtherscanCard;
