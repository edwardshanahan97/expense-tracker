import { useFinance } from "../../../context/FinanceContext";
import SummaryCard from "../../../components/SummaryCard/SummaryCard";
import { TrendingUp, CalendarDays, ReceiptText } from "lucide-react";

const IncomeSummary = () => {
  const { thisMonthIncome, getTotalIncome, getIncomeCount } = useFinance();

  const totalIncome = getTotalIncome();
  const totalIncomeMonth = thisMonthIncome();
  const incomeCount = getIncomeCount();

  return (
    <section className="summary-grid">
      <SummaryCard
        icon={<TrendingUp color="var(--color-income)" />}
        title="Total Income"
        amount={totalIncome}
        text="All Time"
        color="var(--color-income)"
        bgColor="var(--color-income-light)"
      />

      <SummaryCard
        icon={<CalendarDays color="var(--color-primary)" />}
        title="Income"
        amount={totalIncomeMonth}
        text="This Month"
        color="var(--color-primary)"
        bgColor="var(--color-primary-light)"
      />

      <SummaryCard
        icon={<ReceiptText color="var(--color-chart-purple)" />}
        title="Transactions"
        amount={incomeCount}
        text="This Month"
        color="var(--color-chart-purple)"
        bgColor="var(--color-primary-light)"
        currency={false}
      />
    </section>
  );
};

export default IncomeSummary;
