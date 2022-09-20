/* eslint-disable @next/next/no-img-element */
import { Button, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SingularData } from "../../types/remoteDataTypes";

const Card = ({ data }: { data: SingularData }) => {
  const router = useRouter();
  return (
    <Box sx={{ mt: 3 }}>
      <Box>
        <Box
          sx={{
            width: "250px",
            height: "250px",
            position: "relative",
            mb: 2,
          }}
        >
          <img
            src={data.anime_img}
            alt="a girl"
            style={{
              borderRadius: "1em",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Chip
          label="Popular"
          variant="outlined"
          sx={{ borderRadius: "4px" }}
          color="primary"
          size="small"
        />
        <Typography gutterBottom fontWeight={"800"} variant="h6">
          {data.anime_name
            .replace("_", " ")
            .split(" ")
            .map((el) => {
              return el[0].toUpperCase() + el.slice(1) + " ";
            })}
        </Typography>

        <Button
          onClick={() => {
            router.push(`/${data.anime_name}`);
          }}
          sx={{
            transition: ".3s",
            color: "#fff",
          }}
          variant="contained"
        >
          Check Out
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
