import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Stack } from "@mui/material";

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
      <Header />
      {children}
    </Stack>
  );
};

export default Layout;
