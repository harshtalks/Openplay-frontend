import { Alert, AlertTitle } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import CardList from "../components/ListpageComps/CardList";
import RaffleHeroSection from "../components/ListpageComps/RaffleHeroSection";
import Layout from "../layouts/Layout";
import ContractDetails from "../components/Contract/ContractDetails";
import EnterRaffle from "../components/Raffle/EnterRaffle";
import { useAccount } from "wagmi";
import WinnerPickedEventSnackbar from "../components/Event/WinnerPicked";
import RaffleEntered from "../components/Event/RaffleEntered";
import RequiredLoginSnackbar from "../components/globals/RequiredLogin";

const List: NextPage = () => {
  const { isConnected, address } = useAccount();

  return (
    <Layout>
      <Box sx={{ width: "70%", margin: "0 auto" }}>
        <RaffleHeroSection />
        <CardList />
        <RequiredLoginSnackbar />
        {isConnected && (
          <>
            <ContractDetails />
            <EnterRaffle userAddress={address as string} />
            <WinnerPickedEventSnackbar />
            <RaffleEntered />
          </>
        )}
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
