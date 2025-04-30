import { CurrencyData } from "@/types/CurrencyData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart_Component = ({ data }: { data: CurrencyData[] }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid  />
        <XAxis dataKey="date" />

        <YAxis
          yAxisId="left"
          label={{ value: "USD / EUR", angle: -90, position: "insideLeft" }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          label={{ value: "JPY", angle: 90, position: "insideRight" }}
        />

        <Tooltip
          formatter={(value, name) =>
            typeof value === "number" ? [`${value.toFixed(5)}`, name] : [value, name]
          }
        />
        <Legend />

        {/* USD and EUR - use left Y-axis */}
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="USD"
          stroke="#8884d8"
          name="USD"
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="EUR"
          stroke="#82ca9d"
          name="EUR"
        />

        {/* JPY - use right Y-axis */}
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="JPY"
          stroke="#f39c12"
          name="JPY"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart_Component;
