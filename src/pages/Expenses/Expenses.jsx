import "./Expenses.css";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import Button from "../../components/Button/Button";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import Transactions from "../../components/Transactions/Transactions";
import { useFinance } from "../../context/FinanceContext";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/Pagination/Pagination";
import ExpensesSummary from "./ExpensesSummary/ExpensesSummary";
import Filters from "../../components/Filters/Filters";
import useFilters from "../../hooks/useFilters";

const Expenses = ({ isActive, setIsActive }) => {
  const { setCurrentPage } = usePage();
  const { finance } = useFinance();
  const expensesTransactions = finance.transactions.filter(
    (transaction) => transaction.type === "expenses",
  );

  const {
    filteredTransactions,
    category,
    setCategory,
    month,
    setMonth,
    sort,
    setSort,
  } = useFilters(expensesTransactions);

  const { page, setPage, totalPages, currentItems } =
    usePagination(filteredTransactions);

  const recentTransaction = expensesTransactions
    .slice(-5)
    .sort((a, b) => b.date.localeCompare(a.date));

  useEffect(() => setCurrentPage("expenses"), []);
  return (
    <main className="grid">
      <ExpensesSummary />

      <AddTransaction isActive={isActive} setIsActive={setIsActive} />

      <Transactions title="Recent Expenses" transactions={recentTransaction} />

      <div>
        <Filters
          type="expenses"
          category={category}
          setCategory={setCategory}
          month={month}
          setMonth={setMonth}
          sort={sort}
          setSort={setSort}
        />

        <Transactions title="All Expenses" transactions={currentItems} />

        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>

      <Button
        className="button--fixed"
        isMobile={true}
        title="Add Expenses"
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </main>
  );
};

export default Expenses;
