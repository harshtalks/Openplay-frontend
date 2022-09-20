import { Alert, AlertTitle } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import CardList from "../components/ListpageComps/CardList";
import ListHero from "../components/ListpageComps/ListHero";
import ListLoader from "../components/ListpageComps/ListLoader";
import useAnimeList from "../hooks/useAnimeList";
import Layout from "../layouts/Layout";
import { RemoteAnimeData } from "../types/remoteDataTypes";

const List: NextPage = () => {
  const { list, isError, isLoading } = useAnimeList();

  return (
    <Layout>
      <Box sx={{ width: "70%", margin: "0 auto" }}>
        <ListHero />
        {isError && <AlertError />}
        {isLoading && <ListLoader />}
        {list && <CardList list={list.success && list} />}
      </Box>
    </Layout>
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

export default List;
