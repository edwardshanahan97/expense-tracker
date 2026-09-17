import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "./Chart.css";

const Chart = ({ data }) => {
  return (
    <section className="chart">
      <h2 className="chart__title">Income vs Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthName" />
          <YAxis width={45} tickFormatter={(value) => `€${value}`} />

          <Tooltip />
          <Legend itemSorter={() => 1} />

          <Bar
            dataKey="income"
            fill="var(--color-income)"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="expenses"
            fill="var(--color-expenses)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Chart;
