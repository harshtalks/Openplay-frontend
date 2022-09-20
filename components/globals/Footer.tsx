import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ padding: "2rem 0" }}>
      <Box sx={{ padding: "0 7rem" }}>
        <Button
          sx={{ textTransform: "uppercase", letterSpacing: ".25em" }}
          size="large"
        >
          mangaverse
        </Button>
      </Box>
      <Divider />
      <Box sx={{ padding: "0 7rem" }}>
        <Typography variant="body2">&copy; Harsh Pareek, 2022 </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
