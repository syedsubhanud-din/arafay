import React, { ReactNode } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Box, Stack } from "@mui/material";
import Footer from "../components/Footer/Footer";

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
      <Box
        sx={{ flexGrow: 1, overflowX: "hidden", overflowY: "auto" }}
        display={"flex"}
        flexDirection="column"
        alignItems="center"
        height={"100vh"}
      >
        <Header />
        {children}

        <Footer />
      </Box>
    </Stack>
  );
};

export default Layout;
