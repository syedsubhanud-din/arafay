import { Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
import LinesChart from "./Charts/LinesChart";
import BarsChart from "./Charts/BarsChart";
import Trafic from "./Charts/Trafic";
import DataTable from "./DataTables/DataTable";
import PiesChart from "./Charts/PiesChart";

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
          <DataTable />
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <Trafic />
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <PiesChart />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Charts;
