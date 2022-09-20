import { Grid, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const ListLoader = () => {
  return (
    <Grid container spacing={3} sx={{ justifyContent: "center", my: 3 }}>
      {new Array(6)
        .fill(0)
        .map((el, i) => (el = i))
        .map((el) => {
          return (
            <Grid item key={el}>
              <CardSkeleton />
            </Grid>
          );
        })}
    </Grid>
  );
};

const CardSkeleton = () => {
  return (
    <Stack sx={{ mt: 3 }} direction={"column"}>
      <Skeleton
        sx={{ borderRadius: "1em", mb: 1 }}
        variant="rectangular"
        width={250}
        height={250}
        animation="wave"
      />
      <Skeleton
        sx={{ mb: 1 }}
        variant="rectangular"
        width={100}
        height={20}
        animation="wave"
      />
      <Skeleton
        sx={{ mb: 1 }}
        variant="rectangular"
        width={250}
        height={30}
        animation="wave"
      />
      <Skeleton
        sx={{ borderRadius: "10px" }}
        variant="rectangular"
        width={140}
        height={50}
        animation="wave"
      />
    </Stack>
  );
};

export default ListLoader;
