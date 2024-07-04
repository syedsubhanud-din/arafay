import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Stack } from "@mui/material";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Stack
      direction={"row"}
      sx={{ backgroundColor: "#F1F1F1", height: "100vh" }}
    >
      <Sidebar />
      <Box>
        <Header />
        {children}

        <Footer />
      </Box>
    </Stack>
  );
};

export default Layout;
