import "./Expenses.css";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import Button from "../../components/Button/Button";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import Transactions from "../../components/Transactions/Transactions";
import { useFinance } from "../../context/FinanceContext";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/Pagination/Pagination";

const Expenses = ({ isActive, setIsActive }) => {
  const { setCurrentPage } = usePage();
  const { finance } = useFinance();
  const expensesTransactions = finance.transactions.filter(
    (transaction) => transaction.type === "expenses",
  );
  const { page, setPage, totalPages, currentItems } =
    usePagination(expensesTransactions);

  const recentTransaction = expensesTransactions
    .slice(-5)
    .sort((a, b) => b.date.localeCompare(a.date));

  useEffect(() => setCurrentPage("expenses"), []);
  return (
    <main className="grid">
      <AddTransaction isActive={isActive} setIsActive={setIsActive} />

      <Transactions title="Recent Expenses" transactions={recentTransaction} />

      <div>
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
