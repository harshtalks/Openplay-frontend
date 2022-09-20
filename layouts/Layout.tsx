import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Header from "../components/globals/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{}}>
      <Box>
        <Header />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
