import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertTitle, Typography } from "@mui/material";
import { useContractEvent, useContractRead } from "wagmi";
import ABI from "../../abi/contracts/SmartLottery.sol/SmartLottery.json";

export default function WinnerPickedEventSnackbar() {
  const address = process.env.NEXT_PUBLIC_ADDRESS as string;

  const [open, setOpen] = React.useState(false);

  useContractEvent({
    addressOrName: address,
    contractInterface: ABI,
    eventName: "WinnerPicked",
    listener: (event) => {
      setOpen(true);
    },
  });

  const { data, isSuccess } = useContractRead({
    addressOrName: address,
    contractInterface: ABI,
    functionName: "getRecentWinner",
  });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          <AlertTitle>Winner Has Been Picked</AlertTitle>
          <Typography gutterBottom variant="body2">
            Winner has been picked by the chainlink&apos;s VRF.
          </Typography>
          <Typography gutterBottom variant="body2">
            The winner is 🥂
            <strong>
              {" "}
              {isSuccess &&
                data?.toString().slice(0, 5) +
                  "..." +
                  data?.toString().slice(data?.toString().length - 5)}{" "}
            </strong>
            🥂{" "}
          </Typography>
          <Button variant="outlined">More Details</Button>
        </Alert>
      </Snackbar>
    </div>
  );
}
