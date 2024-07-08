import React, { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Box, Typography, Button } from "@mui/material";
// import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const initialState: any = {
  series: [
    {
      name: "Revenue",
      data: [50, 64, 48, 66, 49, 68],
    },
    {
      name: "Profit",
      data: [30, 40, 24, 46, 20, 46],
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
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
      stacked: true,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#5E3AFF", "#56C3FF"],
    },
    colors: ["#5E3AFF", "#56C3FF"],
    xaxis: {
      lines: {
        show: false,
      },
      categories: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
      axisBorder: {
        show: false, // Hide the x-axis line
      },
      axisTicks: {
        show: false, // Hide the x-axis ticks
      },
    },
    dataLables: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
  },
};

const LinesChart: React.FC = () => {
  const [state, setState] = useState(initialState);

  return (
    <Box display="flex" flexDirection={"column"} mb={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
      >
        <Button
          startIcon={<CalendarTodayIcon />}
          sx={{
            backgroundColor: "#F4F7FE",
            color: "#AFB9D7",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          This Month
        </Button>
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
      <Box display="flex">
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
            $37.5K
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              variant="body1"
              textAlign={"center"}
              margin={1}
              fontSize={14}
              sx={{ color: "#A2AED0" }}
            >
              Total <br /> Spent
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bolder", color: "#01B574" }}
            >
              <ArrowDropUpIcon />
              +2.45%
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bolder", color: "#01B574" }}
            display={"flex"}
            alignItems={"center"}
            gap={2}
          >
            <CheckCircleIcon />
            On track
          </Typography>
        </Box>
        <Box flexGrow={1}>
          {/* //? ApexChart Js Start */}
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="line"
            height={250}
            width={"100%"}
          />
          {/* //? ApexChart Js End */}
        </Box>
      </Box>
    </Box>
  );
};

export default LinesChart;
