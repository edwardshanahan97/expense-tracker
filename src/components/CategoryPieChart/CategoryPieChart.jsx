import {
  PieChart,
  Pie,
  Sector,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../Chart/Chart.css";
import { useFinance } from "../../context/FinanceContext";

const COLORS = [
  "var(--color-chart-blue)",
  "var(--color-chart-purple)",
  "var(--color-chart-orange)",
  "var(--color-chart-cyan)",
  "var(--color-chart-pink)",
  "var(--color-chart-lime)",
];

const CategoryPieChart = ({ data, title }) => {
  const pieData = data.map((item, index) => ({
    ...item,
    fill: COLORS[index % COLORS.length],
  }));

  const { finance } = useFinance();

  const renderSlice = (props) => (
    <Sector {...props} fill={props.payload.fill} />
  );

  return (
    <section className="chart">
      <h2 className="chart__title">{title}</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            shape={renderSlice}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          />

          <Tooltip formatter={(value) => `${finance.currency}${value}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};

export default CategoryPieChart;
