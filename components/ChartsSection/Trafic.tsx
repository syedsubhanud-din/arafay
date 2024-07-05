import { Box, Typography } from "@mui/material";
import React from "react";

const Trafic = () => {
  return (
    <Box>
      <Typography variant="body2">Daily Trafic</Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box display={"flex"}>
          <Typography variant="h4">2.579</Typography>
          <Box>
            <Typography variant="body2" color={"gray"}>Visitors</Typography>
          </Box>
        </Box>
        <Typography variant="body1" color="green">
          +2.45%
        </Typography>
      </Box>
    </Box>
  );
};

export default Trafic;
