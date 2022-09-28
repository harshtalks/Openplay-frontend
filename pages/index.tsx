import { Box } from "@mui/material";
import type { NextPage } from "next";
import SnackBar from "../components/globals/Snackbar";
import Hero from "../components/homePageComps/Hero";
import Layout from "../layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <SnackBar />
    </Layout>
  );
};

export default Home;
