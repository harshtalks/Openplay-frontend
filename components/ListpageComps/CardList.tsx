import { Grid } from "@mui/material";
import React from "react";
import Card from "./Card";
import ConnectWallet from "./ConnectWallet";
import EtherscanCard from "./EtherscanCard";
import FaucetCard from "./FaucetCard";

const CardList = () => {
  return (
    <Grid container sx={{ justifyContent: "center", my: 3 }} spacing={6}>
      <Grid item>
        <EtherscanCard />
      </Grid>
      <Grid sx={{ mt: 4 }} item>
        <ConnectWallet />
      </Grid>
      <Grid item>
        <FaucetCard />
      </Grid>
    </Grid>
  );
};

export default CardList;
