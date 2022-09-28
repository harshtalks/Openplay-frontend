import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertTitle } from "@mui/material";

export default function ErrorSnackbar({ value }: { value: boolean }) {
  const [open, setOpen] = React.useState(value);

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
        sx={{ width: "500px" }}
        action={action}
      >
        <Alert onClose={handleClose} severity="error">
          <AlertTitle>Error</AlertTitle>
          Error has been occured in the transaction. Please try once again. If
          it does not solve for you, contact admin @harshtalks on Instagram.
        </Alert>
      </Snackbar>
    </div>
  );
}
