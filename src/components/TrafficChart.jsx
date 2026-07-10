import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "8 AM", traffic: 120 },
  { time: "9 AM", traffic: 210 },
  { time: "10 AM", traffic: 180 },
  { time: "11 AM", traffic: 260 },
  { time: "12 PM", traffic: 320 },
  { time: "1 PM", traffic: 220 },
];

export default function TrafficChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid stroke="#334155" />
        <XAxis dataKey="time" stroke="#94A3B8" />
        <YAxis stroke="#94A3B8" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="traffic"
          stroke="#22d3ee"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}