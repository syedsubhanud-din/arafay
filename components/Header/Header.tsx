import React from "react";
import Stack from "@mui/material/Stack";
import PageLink from "./PageLink";
import PageTitle from "./PageTitle";
import { useRouter } from "next/router";
import { linklist } from "@/data/navbarLinks";
import { Box } from "@mui/material";
import { PrimarySearchAppBar } from "../Search/Appbar";

const Header: React.FC = () => {
  const router = useRouter();

  const breadcrumbs = linklist.filter((link) => {
    return link.to === router.asPath;
  });

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent={"space-between"}
      sx={{ width: "calc(100vw - 300px)", padding: "10px", marginTop: "10px", zIndex: 10 }}
      className="navbar"
      position={"sticky"}
      top={0}
      left={0}
      right={0}
    >
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
        }}
      />
      <Stack direction="column">
        <PageLink link={breadcrumbs[0].to} linkTitle={breadcrumbs[0].name} />
        <PageTitle linkTitle={breadcrumbs[0].name} />
      </Stack>
      {/* <Stack direction="row">
        <PageLink />
        <PageTitle />
      </Stack> */}
        <PrimarySearchAppBar />
      <Stack direction="row">
      </Stack>
    </Stack>
  );
};

export default Header;
