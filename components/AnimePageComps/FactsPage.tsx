/* eslint-disable @next/next/no-img-element */
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useAnimeFacts from "../../hooks/useAnimeFacts";
import { FactListType, FactType } from "../../types/remoteDataTypes";
import { useRouter } from "next/router";

const FactsPage = ({ id }: { id: string }) => {
  const { data, isError, isLoading } = useAnimeFacts({ id });
  const router = useRouter();

  return (
    <Box sx={{ width: "80%", margin: "0 auto", mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "2rem",
          justifyContent: "center",
          flexWrap: "wrap",
          mt: 10,
        }}
      >
        <Box sx={{ width: "61%" }}>
          <Typography fontWeight={900} variant="h4">
            Cool Anime Facts
          </Typography>
          <Box
            sx={{
              height: "600px",
              overflowY: "auto",
              "::-webkit-scrollbar": {
                width: "5px",
              },
              "::-webkit-scrollbar-track": {
                color: "black",
              },
              "::-webkit-scrollbar-thumb": {
                background: "#5BB5A2",
                borderRadius: "5px",
              },
              "::-webkit-scrollbar-thumb:hover": {
                background: "#555",
              },
            }}
          >
            {isError && <AlertError />}
            {isLoading && <FactsSkeleton />}
            {data && <FactList data={data.success && data} />}
          </Box>
        </Box>
        {data && data.success && (
          <Box sx={{ height: "450px", width: "300px" }}>
            <img
              src={data.img}
              alt={id}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                borderRadius: "20px",
              }}
            />
          </Box>
        )}
      </Box>
      <Button
        onClick={() => router.push("/list")}
        variant="outlined"
        startIcon={<ArrowBackIosIcon />}
        size="large"
        sx={{ my: 5 }}
      >
        Go back
      </Button>
    </Box>
  );
};

export const FactList = ({ data }: { data: FactListType }) => {
  return (
    <Grid container spacing={2} sx={{ my: 3 }}>
      {data.data.map((el, i) => {
        return (
          <Grid key={i + 1} item xs={6}>
            <Fact fact={el} index={i + 1} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export const Fact = ({ fact, index }: { fact: FactType; index: number }) => {
  return (
    <Box
      sx={{
        border: "2px solid #E8E8E8",
        width: "300px",
        borderRadius: "10px",
        px: 2,
        py: 1,
        minHeight: "150px",
      }}
    >
      <FactCheckIcon color="primary" />
      <Typography fontWeight={700} gutterBottom variant="h6">
        Fact #{index}
      </Typography>
      <Typography variant="body2" sx={{ opacity: "0.6" }} fontWeight={200}>
        {fact.fact}
      </Typography>
    </Box>
  );
};

export const FactsSkeleton = () => {
  return (
    <Grid container spacing={2} sx={{ my: 3 }}>
      {new Array(6).fill(0).map((_, i) => {
        return (
          <Grid key={i} item xs={6}>
            <FactSkeleton />
          </Grid>
        );
      })}
    </Grid>
  );
};

export const FactSkeleton = () => {
  return (
    <Box
      sx={{
        border: "2px solid #E8E8E8",
        width: "300px",
        borderRadius: "10px",
        px: 2,
        py: 1,
      }}
    >
      <Skeleton width={50} height={25} />
      <Skeleton width={150} height={50} />
      <Skeleton width={250} height={25} />
      <Skeleton width={250} height={25} />
      <Skeleton width={250} height={25} />
      <Skeleton width={250} height={25} />
      <Skeleton width={250} height={25} />
      <Skeleton width={250} height={25} />
    </Box>
  );
};

const AlertError = () => {
  return (
    <Alert sx={{ my: 4 }} severity="error">
      <AlertTitle>Something Went Wrong</AlertTitle>
      Please refresh the page or contact the admin.
    </Alert>
  );
};
export default FactsPage;
