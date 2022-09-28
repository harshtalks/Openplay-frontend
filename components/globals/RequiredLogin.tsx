import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertTitle } from "@mui/material";

export default function RequiredLoginSnackbar() {
  const [open, setOpen] = React.useState(true);

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
        autoHideDuration={6000}
        sx={{ width: "400px" }}
        onClose={handleClose}
        message="You need to connect your wallet in order to use this app. This Dapp does not use ETH mainnet and will only use Goerli Testnet Account."
        action={action}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
      />
    </div>
  );
}
