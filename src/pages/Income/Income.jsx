import "./Income.css";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import Button from "../../components/Button/Button";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import Transactions from "../../components/Transactions/Transactions";
import { useFinance } from "../../context/FinanceContext";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/Pagination/Pagination";
import IncomeSummary from "./IncomeSummary/IncomeSummary";
import Filters from "../../components/Filters/Filters";
import useFilters from "../../hooks/useFilters";

const Income = ({ isActive, setIsActive }) => {
  const { setCurrentPage } = usePage();
  const { finance } = useFinance();
  const incomeTransactions = finance.transactions.filter(
    (transaction) => transaction.type === "income",
  );
  const {
    filteredTransactions,
    category,
    setCategory,
    month,
    setMonth,
    sort,
    setSort,
  } = useFilters(incomeTransactions);

  const { page, setPage, totalPages, currentItems } =
    usePagination(filteredTransactions);

  const recentTransaction = incomeTransactions
    .slice(-5)
    .sort((a, b) => b.date.localeCompare(a.date));

  useEffect(() => setCurrentPage("income"), []);

  return (
    <main className="grid">
      <IncomeSummary />

      <AddTransaction isActive={isActive} setIsActive={setIsActive} />

      <Transactions title="Recent Income" transactions={recentTransaction} />

      <div>
        <Filters
          type="income"
          category={category}
          setCategory={setCategory}
          month={month}
          setMonth={setMonth}
          sort={sort}
          setSort={setSort}
        />

        <Transactions title="All Income" transactions={currentItems} />

        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>

      <Button
        className="button--fixed"
        isMobile={true}
        title="Add Income"
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </main>
  );
};

export default Income;
