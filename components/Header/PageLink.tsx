import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const PageLink = () => {
  return (
    <Stack direction={"row"} gap={1}>
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <Link href={"/"}>
          {" "}
          <Typography variant="caption" color="gray">
            Pages
          </Typography>{" "}
        </Link>{" "}
        /
        <Link href={"/"}>
          <Typography variant="caption" color="gray">
            Main Dashboard
          </Typography>{" "}
        </Link>
      </Stack>
    </Stack>
  );
};

export default PageLink;
