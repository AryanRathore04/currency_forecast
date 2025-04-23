import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const Chart_Component = ({ data }: { data: any[] }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="USD" stroke="#8884d8" />
        <Line type="monotone" dataKey="EUR" stroke="#82ca9d" />
        <Line type="monotone" dataKey="JPY" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart_Component;
