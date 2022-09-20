import { Box } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import Hero from "../components/homePageComps/Hero";
import Layout from "../layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
