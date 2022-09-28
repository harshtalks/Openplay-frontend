/* eslint-disable @next/next/no-img-element */
import { Avatar, Button, Chip, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SingularData } from "../../types/remoteDataTypes";
import FaceIcon from "@mui/icons-material/Face";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const ConnectWallet = () => {
  const { isConnected, address } = useAccount();
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
      <Avatar sx={{ mb: 2, background: "#058ED9", opacity: 0.8, p: 2 }}>
        <FaceIcon />
      </Avatar>

      {isConnected ? (
        <>
          {" "}
          <Typography fontWeight={700} sx={{ mb: 1 }} variant="h6">
            Wallet Connected
          </Typography>
          <Typography fontWeight={200} fontSize={".7rem"} variant="body1">
            Connect your wallet to view the raffle details and start putting
            playing. If you&apos;re new to web3 wallets, then please checkout
            this link to see{" "}
            <Link sx={{ cursor: "pointer" }}>Metamask wallet works.</Link>
          </Typography>
          <Typography
            sx={{ mb: 2 }}
            variant="body1"
            fontSize={".7rem"}
            fontWeight={200}
          >
            Metamask is easy to setup.
          </Typography>
        </>
      ) : (
        <>
          {" "}
          <Typography fontWeight={700} sx={{ mb: 1 }} variant="h6">
            Connect Wallet
          </Typography>
          <Typography
            sx={{ mb: 2 }}
            fontWeight={200}
            fontSize={".7rem"}
            variant="body1"
          >
            Connect your wallet to view the raffle details and start putting
            playing. If you&apos;re new to web3 wallets, then please checkout
            this link to see how to setup a{" "}
            <Link sx={{ cursor: "pointer" }}>Metamask wallet.</Link>
          </Typography>
        </>
      )}

      <ConnectButton showBalance={false} label="Connect Wallet" />
    </Box>
  );
};

export default ConnectWallet;
