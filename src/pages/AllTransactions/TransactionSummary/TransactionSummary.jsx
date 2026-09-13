import SummaryCard from "../../../components/SummaryCard/SummaryCard";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import { useFinance } from "../../../context/FinanceContext";

const TransactionSummary = () => {
  const { getBalance, getTotalIncome, getTotalExpenses } = useFinance();

  const balance = getBalance();
  const totalIncome = getTotalIncome();
  const totalExpenses = getTotalExpenses();

  return (
    <section className="transactions-summary">
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
        text="All Time"
        color="var(--color-income)"
        bgColor="var(--color-income-light)"
      />

      <SummaryCard
        icon={<TrendingDown color="var(--color-expenses)" />}
        title="Total Expenses"
        amount={totalExpenses}
        text="All Time"
        color="var(--color-expenses)"
        bgColor="var(--color-expenses-light)"
      />
    </section>
  );
};

export default TransactionSummary;
