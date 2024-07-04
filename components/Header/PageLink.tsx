import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import React from "react";
interface MyComponentProps {
  link: string;
  linkTitle: string;
}
const PageLink: React.FC<MyComponentProps> = ({ link, linkTitle }) => {
  return (
    // <Stack direction={"row"} gap={1}>
    //   <Stack direction={"row"} gap={1} alignItems={"center"}>
    //     <Link href={"/"}>
    //       {" "}
    //       <Typography variant="caption" color="gray">
    //         Pages
    //       </Typography>{" "}
    //     </Link>{" "}
    //     /
    //     <Link href={"/"}>
    //       <Typography variant="caption" color="gray">
    //         Main Dashboard
    //       </Typography>{" "}
    //     </Link>
    //   </Stack>
    // </Stack>
    <Stack direction={"row"} gap={1}>
      <Breadcrumbs aria-label="breadcrumb" separator="/">
        <Link underline="hover" color={"inherit"} href={link}>
          {" "}
          Pages
        </Link>{" "}
        <Link href={link}>{linkTitle}</Link>
      </Breadcrumbs>
    </Stack>
  );
};

export default PageLink;
