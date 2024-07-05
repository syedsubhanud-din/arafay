import { Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
import LinesChart from "./LinesChart";
import BarsChart from "./BarsChart";
import CheckTable from "./CheckTable";
import Trafic from "./Trafic";

const Card = styled(Paper)({
  padding: "16px",
  color: "#000",
  boxShadow: "0 3px 5px 2px rgba(105, 135, 255, .3)",
  borderRadius: "8px",
});
const Charts = () => {
  return (
    <Grid container spacing={2} px={3}>
      <Grid item xs={6}>
        <Card>
          <LinesChart />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <BarsChart />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <Typography variant="h5" marginY={2}>
            Check Table
          </Typography>
          <CheckTable />
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <Trafic />
          {/* <CheckTable /> */}
        </Card>
      </Grid>
      {/* <Grid item xs={3}>
        <Card>
          <Typography variant="h5" marginY={2}>
            Check Table
          </Typography>
          <CheckTable />
        </Card>
      </Grid> */}
    </Grid>
  );
};

export default Charts;
