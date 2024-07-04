import { Typography } from "@mui/material";
import React from "react";
interface MyComponentProps {
  linkTitle: string;
}
const PageTitle: React.FC<MyComponentProps> = ({ linkTitle }) => {
  return (
    <Typography variant="h6" color="initial">
      {linkTitle}
    </Typography>
  );
};

export default PageTitle;
