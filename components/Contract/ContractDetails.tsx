import { Alert, Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useAccount, useContractRead } from "wagmi";
import ContractABI from "../../abi/contracts/SmartLottery.sol/SmartLottery.json";
import CardSkeleton from "../ListpageComps/CardSkeleton";
import { BigNumber, ethers } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const ContractDetails = () => {
  return (
    <Box>
      <ContractDetailsCard />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "50vh",
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "2rem",
            flexDirection: "column",
          }}
        >
          <DetailCard
            functionName="getRecentWinner"
            bg={"#9D8DF1"}
            text="#fff"
            label="Previous Winner"
          />
          <DetailCard
            functionName="getContractBalance"
            bg={"#E952DE"}
            text="#fff"
            label="Current Winning Amount"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "2rem",
            flexDirection: "column",
          }}
        >
          <DetailCard
            functionName="numPlayers"
            bg={"#99E1D9"}
            text="#000"
            label="Current Total Players"
          />
          <DetailCard
            functionName="getEntranceFee"
            bg={"#F7567C"}
            text="#fff"
            label="Fees to Enter Raffle"
          />
        </Box>
      </Box>
    </Box>
  );
};

const DetailCard = ({
  bg,
  text,
  functionName,
  label,
}: {
  bg: string;
  text: string;
  functionName: string;
  label: string;
}) => {
  const address = process.env.NEXT_PUBLIC_ADDRESS as string;

  const { data, isLoading, isError } = useContractRead({
    addressOrName: address,
    contractInterface: ContractABI,
    functionName: functionName,
  });

  const stringConversion = (data: ethers.utils.Result): string => {
    if (!["getRecentWinner", "numPlayers"].includes(functionName)) {
      return formatEther(data) + " ETH";
    }

    if (data.toString().length > 10) {
      const str = data.toString();
      return str.slice(0, 5) + "..." + str.slice(str.length - 4);
    }

    return data.toString();
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          background: bg,
          borderRadius: "22px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "300px",
          height: "130px",
          px: 4,
        }}
      >
        <CardSkeleton />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        background: bg,
        borderRadius: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        color: text,
        width: "300px",
        height: "130px",
        px: 4,
      }}
    >
      {isError ? (
        <Typography>Something went wrong!</Typography>
      ) : (
        data && (
          <>
            <Typography fontWeight={"800"} sx={{ mb: 1 }} variant="h4">
              {stringConversion(data)}
            </Typography>
            <Stack direction={"row"} spacing={1} sx={{ alignItems: "center" }}>
              <CurrencyExchangeIcon />
              <Typography fontWeight={"500"} fontSize={"1em"} variant="h6">
                {label}
              </Typography>
            </Stack>
          </>
        )
      )}
    </Box>
  );
};

const ContractDetailsCard = () => {
  const address = process.env.NEXT_PUBLIC_ADDRESS as string;

  return (
    <Box
      sx={{
        background: "#fff",
        px: 4,
        py: 2,
        my: 1,
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: 2,
        }}
      >
        <Typography fontWeight={"800"} sx={{ mb: 1 }} variant="body1">
          All the necessary Info of the contract.
        </Typography>
        <Button>goerli.etherscan.io</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography fontWeight={"800"} sx={{ mb: 1 }} variant="body1">
          Contract Address
        </Typography>
        <Typography sx={{ mb: 1 }} variant="body1">
          {address}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContractDetails;
