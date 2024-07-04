import React from "react";
import Stack from "@mui/material/Stack";
import PageLink from "./PageLink";
import PageTitle from "./PageTitle";


interface MyComponentProps {
  link: string;
  linkTitle : string;
}

const Header = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent={"space-between"}
      sx={{ width: "60%" }}
      className="navbar"
    >
      <Stack direction="column">
        <PageLink />
        <PageTitle />
      </Stack>
      <Stack direction="row">
        <PageLink />
        <PageTitle />
      </Stack>
      <Stack direction="row"></Stack>
    </Stack>
  );
};

export default Header;
