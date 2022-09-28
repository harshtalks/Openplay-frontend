/* eslint-disable @next/next/no-img-element */
import { Avatar, Button, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SingularData } from "../../types/remoteDataTypes";
import AddchartIcon from "@mui/icons-material/Addchart";

const Card = () => {
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
      <Avatar sx={{ mb: 2, background: "#5BB5A2", opacity: 0.6, p: 2 }}>
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
        necessitatibus. Iure esse molestiae animi fugiat quidem ratione eligendi
        quis recusandae ab facilis.
      </Typography>
      <Button variant="outlined">Etherscan.io</Button>
    </Box>
  );
};

export default Card;
