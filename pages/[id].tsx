import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import FactsPage from "../components/AnimePageComps/FactsPage";
import HeroAnime from "../components/AnimePageComps/HeroAnime";
import useAnimeFacts from "../hooks/useAnimeFacts";
import Layout from "../layouts/Layout";

const AnimePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      {id && (
        <>
          <HeroAnime id={id as string} />
          <FactsPage id={id as string} />
        </>
      )}
    </Layout>
  );
};

export default AnimePage;
