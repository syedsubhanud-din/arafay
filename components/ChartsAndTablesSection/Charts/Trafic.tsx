import { Box, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import * as React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const initialState: any = {
  series: [
    {
      name: "Daily Trafic",
      data: [20, 30, 40, 20, 45, 50, 30],
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
    colors: ["#7655FF"],
    plotOptions: {
      bar: {
        columnWidth: "35%",
        borderRadius: 8,
      },
    },
    xaxis: {
      categories: ["00", "04", "08", "12", "14", "16", "18"],
      axisBorder: {
        show: false, // Hide the x-axis line
      },
      axisTicks: {
        show: false, // Hide the x-axis ticks
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#7655FF", "#ffffff"], // end color
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.5,
        stops: [60, 90, 300],
      },
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
const Trafic = () => {
  return (
    <Box display="flex" flexDirection={"column"} mb={2}>
      <Box>
        <Typography variant="body1" fontSize={14} sx={{ color: "#A2AED0" }}>
          Daily Trafic
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box display={"flex"}>
            <Box alignSelf={"end"}>
              <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
                2.579
              </Typography>
            </Box>
            <Box alignSelf={"end"}>
              <Typography
                variant="body2"
                fontSize={14}
                ml={1}
                sx={{ color: "#A2AED0" }}
              >
                Visitors
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bolder", color: "#01B574" }}
          >
            <ArrowDropUpIcon />
            +2.45%
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box display={"flex"} alignItems={"center"}></Box>
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
};

export default Trafic;
