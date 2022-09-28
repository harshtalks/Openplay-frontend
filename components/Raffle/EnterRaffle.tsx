import {
  Alert,
  AlertTitle,
  Avatar,
  Button,
  Chip,
  CircularProgress,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ABI from "../../abi/contracts/SmartLottery.sol/SmartLottery.json";
import { ethers } from "ethers";
import {
  useBalance,
  usePrepareContractWrite,
  useTransaction,
  useWaitForTransaction,
} from "wagmi";
import { useContractWrite } from "wagmi";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ErrorSnackbar from "./ErrorSnackbar";
import LoadingButton from "@mui/lab/LoadingButton";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const EnterRaffle = ({ userAddress }: { userAddress: string }) => {
  const address = process.env.NEXT_PUBLIC_ADDRESS as string;

  const { data, isSuccess } = useBalance({
    addressOrName: userAddress,
  });

  const { config } = usePrepareContractWrite({
    addressOrName: address,
    contractInterface: ABI,
    functionName: "enterLottery",
    chainId: 5,
    overrides: {
      gasLimit: 2100000,
      gasPrice: 8000000000,
      value: ethers.utils.parseEther("0.1"),
    },
  });

  const {
    data: playerEnteredData,
    isLoading: hasUserEntered,
    isError: hasErrorOccured,
    write: enterRaffle,
    isSuccess: hasSucceeded,
  } = useContractWrite(config);

  const {
    isLoading: isWaiting,
    isSuccess: isWaitingDone,
    data: confirmedData,
  } = useWaitForTransaction({
    hash: playerEnteredData?.hash,
    confirmations: 1,
  });

  return (
    <Box
      sx={{
        mt: 3,
        background: "#fff",
        width: "600px",
        py: 4,
        px: 4,
        mb: 4,
        borderRadius: "8px",
        mx: "auto",
      }}
    >
      <Avatar sx={{ mb: 2, background: "#8A4FFF", opacity: 1, p: 2 }}>
        <EmojiEventsIcon />
      </Avatar>
      <Typography fontWeight={700} sx={{ mb: 2 }} variant="h4">
        Enter Raffle
      </Typography>
      <Typography
        sx={{ mb: 2 }}
        fontWeight={200}
        fontSize={".9rem"}
        variant="body1"
      >
        You need to pay entree fee equal to the entrance fee specified above.
        You can enter the raffle as many time you want. Randomly a user will be
        picked as a winner and all the contract money will be rewarded to them.
        Picking up the random winner will be completely decentralized using
        chainlink VRFs and Chainlink Keepers will automatically execute the
        specified methods to declaring winners. Hence this Webapp levarages the
        combination off-chain and on-chain nodes. Visit{" "}
        <Link sx={{ cursor: "pointer" }}>Chainlink VRFs</Link> and{" "}
        <Link sx={{ cursor: "pointer" }}>Chainlink Keepers</Link> for more info.
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Chip label="winner is picked in every 20 seconds." />
      </Box>

      {isSuccess && (
        <>
          {Number(data?.formatted) < 0.2 && (
            <InsufficientFundWarning value={data?.formatted as string} />
          )}
        </>
      )}
      {hasErrorOccured && <ErrorSnackbar value={true} />}
      {hasSucceeded && (
        <Box
          sx={{
            width: "100%",
            background: "rgba(95, 173, 86, 0.2)",
            my: 2,
            borderRadius: "5px",
            px: 2,
            py: 2,
          }}
        >
          <Stack
            sx={{ mb: 2 }}
            direction={"row"}
            alignItems="center"
            spacing={2}
          >
            <Avatar sx={{ backgroundColor: "rgba(95, 173, 86, 0.7)" }}>
              <DoneAllIcon />
            </Avatar>
            <Typography fontWeight={"800"} variant="body1">
              Transaction
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"space-between"}
            sx={{ mb: 2 }}
          >
            <Typography textAlign={"center"} fontWeight={"200"} variant="body1">
              Hash of the transaction
            </Typography>
            <Button
              sx={{ textDecoration: "underline" }}
              size="medium"
              color="secondary"
            >
              {playerEnteredData?.hash.slice(0, 10) +
                "...." +
                playerEnteredData?.hash.slice(
                  playerEnteredData?.hash.length - 10
                )}
            </Button>
          </Stack>
          {isWaiting && (
            <Stack
              direction={"column"}
              spacing={2}
              alignItems="center"
              justifyContent={"center"}
            >
              <Typography
                fontWeight={"200"}
                fontSize={"0.75em"}
                variant="body1"
              >
                Wait for Hash Confirmations
              </Typography>
              <CircularProgress color="success" />
            </Stack>
          )}
          {isWaitingDone && (
            <>
              <ConfirmationDetailWithAction
                label={"To"}
                value={confirmedData?.to as string}
              />
              <ConfirmationDetailWithAction
                label={"From"}
                value={confirmedData?.from as string}
              />
              <BlockConfirmationDetailRow
                label={"Block Number"}
                value={(confirmedData?.blockNumber as number).toString()}
              />
              <BlockConfirmationDetailRow
                label={"Confirmations"}
                value={(confirmedData?.confirmations as number).toString()}
              />
              <Chip label="More Details available on the etherscan page" />
              <Typography
                sx={{ mt: 1 }}
                fontSize={"0.6rem"}
                textAlign="justify"
                color="secondary.main"
                variant="body1"
              >
                This does not mean that you have entered the raffle. this is
                just a information of transaction, please check meta mask
                whether the transaction is reverted. You will receive a snackbar
                in a while on this app if your entry is successful. meanwhile
                check etherscan.io page for detailed transaction overview.
              </Typography>
            </>
          )}
        </Box>
      )}
      <LoadingButton
        loading={hasUserEntered}
        loadingPosition="end"
        size="large"
        variant="contained"
        sx={{ color: "#fff" }}
        disabled={Number(data?.formatted) < 0.2 || !enterRaffle}
        endIcon={<ArrowForwardIosIcon />}
        onClick={() => {
          enterRaffle?.();
        }}
      >
        Enter Lottery
      </LoadingButton>
    </Box>
  );
};

const InsufficientFundWarning = ({ value }: { value: string }) => {
  return (
    <Alert
      action={<Button variant="outlined">Faucet</Button>}
      variant="outlined"
      sx={{ my: 2 }}
      severity="warning"
    >
      <AlertTitle>Insufficient Funds</AlertTitle>
      funds in your account ({Number(value).toFixed(3)}) is not enough to take
      part in raffle. Please go to faucets for more test Goerli ETHS.
    </Alert>
  );
};

const BlockConfirmationDetailRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      alignItems="center"
      justifyContent={"space-between"}
      sx={{ mb: 2 }}
    >
      <Typography fontWeight={"200"} variant="body1">
        {label}
      </Typography>
      <Typography fontWeight={"bold"} variant="body1">
        {value}
      </Typography>
    </Stack>
  );
};

const ConfirmationDetailWithAction = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      justifyContent={"space-between"}
      sx={{ mb: 2 }}
    >
      <Typography textAlign={"center"} fontWeight={"200"} variant="body1">
        {label}
      </Typography>
      <Button
        sx={{ textDecoration: "underline" }}
        size="medium"
        color="secondary"
      >
        {value.slice(0, 10) + "...." + value.slice(value.length - 10)}
      </Button>
    </Stack>
  );
};

export default EnterRaffle;
