import { Grid } from "@mui/material";
import React from "react";
import { RemoteAnimeData } from "../../types/remoteDataTypes";
import Card from "./Card";

const CardList = ({ list }: { list: RemoteAnimeData }) => {
  return (
    <Grid container sx={{ justifyContent: "center", my: 3 }} spacing={3}>
      {list?.data.map((el) => {
        return (
          <Grid key={el.anime_id} item>
            <Card data={el} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardList;
