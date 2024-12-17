import React, { useMemo } from "react";
import { TrendingUp } from "lucide-react"; // Icon Library
import { PieChart, Pie, Label, Tooltip } from "recharts"; // Recharts for charts
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

// Chart Data
const chartData = [
  { browser: "chrome", visitors: 275, fill: "#4285F4" }, // Chrome Color
  { browser: "safari", visitors: 200, fill: "#FFCD00" }, // Safari Color
  { browser: "firefox", visitors: 287, fill: "#FF7139" }, // Firefox Color
  { browser: "edge", visitors: 173, fill: "#0078D7" }, // Edge Color
  { browser: "other", visitors: 190, fill: "#9E9E9E" }, // Other Color
];

export function VisitorPieChart() {
  // Calculate total visitors
  const totalVisitors = useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.visitors, 0),
    []
  );

  return (
    <Card sx={{ maxWidth: 400, margin: "20px auto", borderRadius: 2 }}>
      {/* Card Header */}
      <CardHeader
        title={
          <Typography variant="h6" align="center">
            Pie Chart - Donut with Text
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary" align="center">
            January - June 2024
          </Typography>
        }
      />
      <Divider />

      {/* Card Content */}
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PieChart width={250} height={250}>
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              outerRadius={100}
              strokeWidth={5}
              labelLine={false}
            >
              {/* Central Label */}
              <Label
                position="center"
                content={({ viewBox }) => {
                  const { cx, cy } = viewBox || {};
                  return (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={cx}
                        y={cy}
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          fill: "#333",
                        }}
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={cx}
                        y={cy + 20}
                        style={{ fontSize: "0.8rem", fill: "#777" }}
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
            <Tooltip />
          </PieChart>
        </Box>
      </CardContent>

      {/* Card Footer */}
      <Divider />
      <CardContent sx={{ textAlign: "center", paddingBottom: "16px" }}>
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <Typography variant="body2" fontWeight="medium">
            Trending up by 5.2% this month
          </Typography>
          <TrendingUp size={16} color="#2e7d32" />
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          mt={1}
        >
          Showing total visitors for the last 6 months
        </Typography>
      </CardContent>
    </Card>
  );
}

// import React from "react";
// import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
// import { Card, CardHeader, CardContent, Typography, Divider } from "@mui/material";

// // Data for the pie chart
// const chartVistorData = [
//   { browser: "Chrome", visitors: 275, color: "#4285F4" },
//   { browser: "Safari", visitors: 200, color: "#FFCD00" },
//   { browser: "Firefox", visitors: 287, color: "#FF7139" },
//   { browser: "Edge", visitors: 173, color: "#0078D7" },
//   { browser: "Other", visitors: 190, color: "#9E9E9E" },
// ];

// // Component
// const PieCharts = () => {
//   // Calculate the total visitors
//   const totalVisitors = chartVistorData.reduce((acc, curr) => acc + curr.visitors, 0);

//   return (
//     <Card sx={{ maxWidth: 500, margin: "20px auto", borderRadius: 2 }}>
//       {/* Header */}
//       <CardHeader
//         title={
//           <Typography variant="h6" align="center">
//             Visitors Distribution
//           </Typography>
//         }
//         subheader={
//           <Typography variant="body2" color="text.secondary" align="center">
//             January - June 2024
//           </Typography>
//         }
//       />
//       <Divider />

//       {/* Pie Chart */}
//       <CardContent>
//         <div style={{ width: "100%", height: 300 }}>
//           <ResponsiveContainer>
//             <PieChart>
//               <Pie
//                 data={chartVistorData}
//                 dataKey="visitors"
//                 nameKey="browser"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={60}
//                 outerRadius={100}
//                 label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//               >
//                 {chartVistorData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip formatter={(value) => `${value} visitors`} />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>

//       {/* Footer */}
//       <Divider />
//       <CardContent sx={{ textAlign: "center" }}>
//         <Typography variant="body1" fontWeight="bold">
//           Total Visitors: {totalVisitors}
//         </Typography>
//         <Typography variant="caption" color="text.secondary">
//           Data based on the last 6 months
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default PieCharts;

