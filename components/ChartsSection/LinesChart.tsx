import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// import { LineChart } from '@mui/x-charts/LineChart';

import { Box, Typography } from "@mui/material";

interface DataPoint {
  name: string;
  Revenue: number;
  Profit: number;
}

const data: DataPoint[] = [
  { name: "Sep", Revenue: 50, Profit: 30 },
  { name: "Oct", Revenue: 64, Profit: 40 },
  { name: "Nov", Revenue: 48, Profit: 24 },
  { name: "Dec", Revenue: 66, Profit: 46 },
  { name: "Jan", Revenue: 49, Profit: 20 },
  { name: "Feb", Revenue: 68, Profit: 46 },
];

const LinesChart: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Main Dashboard</Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4">$37.5K</Typography>
        <Typography variant="body1" color="green">
          +2.45%
        </Typography>
      </Box>
      <ResponsiveContainer
        width="70%"
        height={400}
        
        // sx={{
        //   [`& .${lineElementClasses.root}`]: {
        //     stroke: "#8884d8",
        //     strokeWidth: 2,
        //   },
        //   [`& .${markElementClasses.root}`]: {
        //     stroke: "#8884d8",
        //     scale: "0.6",
        //     fill: "#fff",
        //     strokeWidth: 2,
        //   },
        // }}
      >
        <LineChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" />
          <YAxis /> */}
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Revenue" stroke="#8884d8" />
          <Line type="monotone" dataKey="Profit" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LinesChart;
