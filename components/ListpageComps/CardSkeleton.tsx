import { Grid, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const CardSkeleton = () => {
  return (
    <Stack sx={{ mt: 3 }} direction={"column"}>
      <Skeleton
        sx={{ mb: 2, borderRadius: "5px" }}
        variant="rectangular"
        width={130}
        height={40}
        animation="wave"
      />
      <Skeleton
        sx={{ mb: 1, borderRadius: "5px" }}
        variant="rectangular"
        width={250}
        height={30}
        animation="wave"
      />
    </Stack>
  );
};

export default CardSkeleton;
