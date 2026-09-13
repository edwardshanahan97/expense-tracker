import { useFinance } from "../../../context/FinanceContext";
import SummaryCard from "../../../components/SummaryCard/SummaryCard";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

const OverviewSummary = () => {
  const { getBalance, thisMonthIncome, thisMonthExpenses } = useFinance();
  const balance = getBalance();
  const totalIncome = thisMonthIncome();
  const totalExpenses = thisMonthExpenses();

  return (
    <section className="summary-grid">
      <SummaryCard
        icon={<Wallet color="var(--color-primary)" />}
        title="Current Balance"
        amount={balance}
        text="Your Balance"
        color="var(--color-primary)"
        bgColor="var(--color-primary-light)"
      />

      <SummaryCard
        icon={<TrendingUp color="var(--color-income)" />}
        title="Total Income"
        amount={totalIncome}
        text="This Month"
        color="var(--color-income)"
        bgColor="var(--color-income-light)"
      />

      <SummaryCard
        icon={<TrendingDown color="var(--color-expenses)" />}
        title="Total Expenses"
        amount={totalExpenses}
        text="This Month"
        color="var(--color-expenses)"
        bgColor="var(--color-expenses-light)"
      />
    </section>
  );
};

export default OverviewSummary;
