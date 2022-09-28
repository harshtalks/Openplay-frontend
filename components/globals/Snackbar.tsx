import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertTitle } from "@mui/material";

export default function SnackBar() {
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
        action={action}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
      >
        <Alert variant="standard" onClose={handleClose} sx={{ width: "100%" }}>
          <AlertTitle>Alert</AlertTitle>
          This website is not optimized for small screen devices. Please use a
          desktop or laptop to view this website.
        </Alert>
      </Snackbar>
    </div>
  );
}
