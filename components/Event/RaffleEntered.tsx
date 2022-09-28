import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertTitle, Typography } from "@mui/material";
import { useContractEvent, useContractRead } from "wagmi";
import ABI from "../../abi/contracts/SmartLottery.sol/SmartLottery.json";

export default function RaffleEntered() {
  const address = process.env.NEXT_PUBLIC_ADDRESS as string;

  const [open, setOpen] = React.useState(false);

  useContractEvent({
    addressOrName: address,
    contractInterface: ABI,
    eventName: "RaffleEnter",
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
          <AlertTitle>Raffle Entry has been submitted</AlertTitle>
          <Typography gutterBottom variant="body2">
            The user has successfully entered the raffle.
          </Typography>
          <Typography gutterBottom variant="body2">
            The user address (soon to be champ, hopefully) is 🥂
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
