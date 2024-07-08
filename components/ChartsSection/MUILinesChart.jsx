// import React, { useState } from "react";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import BarChartIcon from "@mui/icons-material/BarChart";

// // import { Line } from "react-chartjs-2";
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// //   ChartOptions,
// // } from "chart.js";

// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   Title,
// //   Tooltip,
// //   Legend
// // );
// // import {
// //   Line,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   Legend,
// //   ResponsiveContainer,
// // } from "recharts";
// // import {
// //   LineChart,
// //   lineElementClasses,
// //   markElementClasses,
// // } from "@mui/x-charts/LineChart";
// // import { ThemeProvider, createTheme } from "@mui/material/styles";

// import { Box, Typography, Button, IconButton } from "@mui/material";
// import ReactApexChart from "react-apexcharts";
// import { ShowChart } from "@mui/icons-material";

// // interface DataPoint {
// //   name: string;
// //   Revenue: number;
// //   Profit: number;
// // }
// // interface DataPoint {
// //   Revenue: number;
// //   Profit: number;
// // }

// // const data: DataPoint[] = [
// //   { name: "Sep", Revenue: 50, Profit: 30 },
// //   { name: "Oct", Revenue: 64, Profit: 40 },
// //   { name: "Nov", Revenue: 48, Profit: 24 },
// //   { name: "Dec", Revenue: 66, Profit: 46 },
// //   { name: "Jan", Revenue: 49, Profit: 20 },
// //   { name: "Feb", Revenue: 68, Profit: 46 },
// // ];
// // const data: DataPoint[] = [
// //   { Revenue: 50, Profit: 30 },
// //   { Revenue: 64, Profit: 40 },
// //   { Revenue: 48, Profit: 24 },
// //   { Revenue: 66, Profit: 46 },
// //   { Revenue: 49, Profit: 20 },
// //   { Revenue: 68, Profit: 46 },
// // ];

// // const Revenue = [50, 64, 48, 66, 49, 68];
// // const Profit = [30, 40, 24, 46, 20, 46];
// // const xLabels = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];

// type SeriesType = {
//   name: string;
//   data: number[];
// };

// type ChartOptionsType = {
//   height: number;
//   type:
//     | "line"
//     | "area"
//     | "bar"
//     | "pie"
//     | "donut"
//     | "radialBar"
//     | "scatter"
//     | "bubble"
//     | "heatmap"
//     | "candlestick"
//     | "boxPlot"
//     | "radar"
//     | "polarArea"
//     | "rangeBar"
//     | "rangeArea"
//     | "treemap"
//     | undefined;
//   zoom: {
//     enabled: boolean;
//   };
// };

// type DataLabelsType = {
//   enabled: boolean;
// };

// type StrokeType = {
//   curve:
//     | "smooth"
//     | "straight"
//     | "stepline"
//     | "linestep"
//     | "monotoneCubic"
//     | ("smooth" | "straight" | "stepline" | "linestep" | "monotoneCubic")[]
//     | undefined;
//   color: string[];
// };

// // type TitleType = {
// //   text: string;
// //   align: "left" | "center" | "right" | undefined;
// // };

// // type GridType = {
// //   row: {
// //     colors: string[];
// //     opacity: number;
// //   };
// // };

// type XAxisType = {
//   categories: string[];
// };

// type OptionsType = {
//   chart: ChartOptionsType;
//   dataLabels: DataLabelsType;
//   stroke: StrokeType;
//   // title: TitleType;
//   xaxis: XAxisType;
// };

// type InitialStateType = {
//   series: SeriesType[];
//   options: OptionsType;
// };

// const initialState: any = {
//   series: [
//     {
//       name: "Revenue",
//       data: [50, 64, 48, 66, 49, 68],
//     },
//     {
//       name: "Profit",
//       data: [30, 40, 24, 46, 20, 46],
//     },
//   ],
//   options: {
//     legend: {
//       show: false,
//     },
//     chart: {
//       toolbar: {
//         show: false,
//       },
//       height: 350,
//       type: "line",
//       zoom: {
//         enabled: true,
//       },
//     },
//     grid: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//       colors: ["#5E3AFF", "#56C3FF"],
//     },
//     colors: ["#5E3AFF", "#56C3FF"],
//     // title: {
//     //   text: "Product Trends by Month",
//     //   align: "left",
//     // },
//     xaxis: {
//       lines: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },

//       categories: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
//     },
//     dataLables: {
//       enabled: false,
//     },
//     yaxis: {
//       show: false,
//     },
//   },
// };

// const MUILinesChart: React.FC = () => {
//   const [state, setState] = useState(initialState);

//   return (
//     <Box display="flex" flexDirection={"column"} mb={2}>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={5}>
//         <Button
//           startIcon={<CalendarTodayIcon />}
//           sx={{
//             backgroundColor: "#F4F7FE",
//             color: "#AFB9D7",
//             padding: "10px 20px",
//             borderRadius: "10px"
//           }}
//         >
//           This Month
//         </Button>
//         <Button
//           sx={{
//             backgroundColor: "#F4F7FE",
//             color: "#422AFB",
//             padding: "10px 5px",
//             borderRadius: "10px",
//           }}
//         >
//           <BarChartIcon/>
//         </Button>
//       </Box>
//       <Box display="flex">
//         <Box>
//           <Typography variant="h6">Main Dashboard</Typography>

//           <Typography variant="h4">$37.5K</Typography>
//           <Typography variant="body1" color="green">
//             +2.45%
//           </Typography>
//         </Box>
//         <Box flexGrow={1}>
//           {/* //? ApexChart Js Start */}
//           <ReactApexChart
//             options={state.options}
//             series={state.series}
//             type="line"
//             height={250}
//             width={"100%"}
//           />
//           {/* <div id="chart">
//       </div> */}
//           {/* //? ApexChart Js End */}
//         </Box>
//       </Box>
//       {/* <ResponsiveContainer
//         width="70%"
//         height={400}

//         sx={{
//           [`& .${lineElementClasses.root}`]: {
//             stroke: "#8884d8",
//             strokeWidth: 2,
//           },
//           [`& .${markElementClasses.root}`]: {
//             stroke: "#8884d8",
//             scale: "0.6",
//             fill: "#fff",
//             strokeWidth: 2,
//           },
//         }}
//       >
//         <LineChart data={data}>
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="Revenue" stroke="#8884d8" />
//           <Line type="monotone" dataKey="Profit" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer> */}
//       {/* <LineChart
//         width={700}
//         height={400}
//         series={[
//           { data: Revenue, label: "Revenue:", id: "revenue" },
//           { data: Profit, label: "Profit:", id: "profit" },
//         ]}
//         xAxis={[{ scaleType: "point", data: xLabels }]}
//         sx={{
//           [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
//             strokeWidth: 4,
//           },
//           ".MuiLineElement-series-revenue": {
//             stroke: "#5E3AFF"
//           },
//           ".MuiLineElement-series-profit": {
//             stroke: "#56C3FF"
//           },
//           [`.${markElementClasses.root}`]: {
//             stroke: '#5E3AFF',
//             fill: 'transparent',
//           },
//           [`.${lineElementClasses.root}:hover .${markElementClasses.root}`]: {
//             fill: '#5E3AFF', // Color for hovered points
//             // stroke: 'none',
//           },
//           [`.${markElementClasses.root}: .${markElementClasses.highlighted}`]:
//             {
//               fill: "#5E3AFF",
//             },
//           [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]:
//             {
//               fill: "#fff",
//             },
//           [`& .${markElementClasses.highlighted}`]: {
//             stroke: "##FFC0CB",
//             fill: '#5E3AFF'
//           },
//         }}
//       /> */}
//     </Box>
//   );
// };

// export default MUILinesChart;
