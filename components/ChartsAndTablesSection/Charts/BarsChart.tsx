import { Box, Button, Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import * as React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const initialState: any = {

  series: [
    {
      name: "PRODUCT A",
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
      thickness: 4,
    },
    {
      name: "PRODUCT B",
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
      thickness: 4,
    },
    {
      name: "PRODUCT C",
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
      thickness: 4,
    },
  ],
  options: {
    legend: {
      show: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 350,
      stacked: true,
      // stackType: "100%",
    },
    colors: ["#7655FF", "#80D9FF", "#E5ECF9"],
    plotOptions: {
      bar: {
        columnWidth: '20%',
        borderRadius: 8,
      },
    },
    xaxis: {
      categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
      axisBorder: {
        show: false, // Hide the x-axis line
      },
      axisTicks: {
        show: false, // Hide the x-axis ticks
      },
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: false, // Hide the percentage labels
    },
  },
};
export default function BarsChart() {
  return (
    <Box display="flex" flexDirection={"column"} mb={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
      >
        <Typography variant="h6">Weekly Revenue</Typography>
        <Button
          sx={{
            backgroundColor: "#F4F7FE",
            color: "#422AFB",
            padding: "10px 5px",
            borderRadius: "10px",
          }}
        >
          <BarChartIcon />
        </Button>
      </Box>
      <Box flexGrow={1}>
        <ReactApexChart
          options={initialState.options}
          series={initialState.series}
          type="bar"
          height={250}
          width={"100%"}
        />
      </Box>
    </Box>
  );
}
