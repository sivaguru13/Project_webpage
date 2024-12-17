import React from "react";
import "./chart.css";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer, Tooltip } from "recharts";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(220, 90%, 56%)", // Replace CSS variable with actual HSL color value
  },
};

export function BarChartComponent() {
  return (
    <div className="card" style={styles.card}>
      {/* Header */}
      <div className="card-header" style={styles.header}>
        <h2 style={styles.title}>Bar Chart</h2>
        <p style={styles.description}>January - June 2024</p>
      </div>

      {/* Chart Content */}
      <div className="card-content" style={styles.content}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              style={{ fontSize: "12px", fill: "#6B7280" }}
            />
            <Tooltip cursor={false} />
            <Bar
              dataKey="desktop"
              fill={chartConfig.desktop.color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="card-footer" style={styles.footer}>
        <div style={styles.trending}>
          Trending up by 5.2% this month <TrendingUp size={16} color="green" />
        </div>
        <p style={styles.footerText}>
          Showing total visitors for the last 6 months
        </p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#f9fafb",
    padding: "1rem",
    borderBottom: "1px solid #e5e7eb",
  },
  title: {
    margin: 0,
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#374151",
  },
  description: {
    margin: "0.25rem 0 0",
    fontSize: "0.875rem",
    color: "#6b7280",
  },
  content: {
    padding: "1rem",
  },
  footer: {
    backgroundColor: "#f9fafb",
    padding: "1rem",
    borderTop: "1px solid #e5e7eb",
    fontSize: "0.875rem",
    color: "#6b7280",
  },
  trending: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontWeight: "500",
    color: "#10b981",
  },
  footerText: {
    marginTop: "0.25rem",
    color: "#6b7280",
  },
};
