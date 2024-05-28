"use client";

import { PureComponent } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "BTC", value: 400 },
  { name: "USDT", value: 300 },
  { name: "SOL", value: 300 },
  { name: "ETH", value: 200 },
  { name: "GALA", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer minWidth={150} minHeight={270} width={"100%"} height={"100%"}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ paddingBottom: "10px", fontSize: "0.85rem"}}
            iconType="circle"
            iconSize={15}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
