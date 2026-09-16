import { useFinance } from "../../../context/FinanceContext";
import SummaryCard from "../../../components/SummaryCard/SummaryCard";
import { CalendarDays, ReceiptText, TrendingDown } from "lucide-react";

const ExpensesSummary = () => {
  const { thisMonthExpenses, getTotalExpenses, getExpensesCount } =
    useFinance();

  const totalExpenses = getTotalExpenses();
  const totalExpensesMonth = thisMonthExpenses();
  const expensesCount = getExpensesCount();

  return (
    <section className="summary-grid">
      <SummaryCard
        icon={<TrendingDown color="var(--color-expenses)" />}
        title="Total Expenses"
        amount={totalExpenses}
        text="All Time"
        color="var(--color-expenses)"
        bgColor="var(--color-expenses-light)"
      />

      <SummaryCard
        icon={<CalendarDays color="var(--color-primary)" />}
        title="Expenses"
        amount={totalExpensesMonth}
        text="This Month"
        color="var(--color-primary)"
        bgColor="var(--color-primary-light)"
      />

      <SummaryCard
        icon={<ReceiptText color="var(--color-chart-purple)" />}
        title="Transactions"
        amount={expensesCount}
        text="This Month"
        color="var(--color-chart-purple)"
        bgColor="var(--color-primary-light)"
        currency={false}
      />
    </section>
  );
};

export default ExpensesSummary;
