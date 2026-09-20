import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import TransactionSummary from "./TransactionSummary/TransactionSummary";
import Transactions from "../../components/Transactions/Transactions";
import Pagination from "../../components/Pagination/Pagination";
import { useFinance } from "../../context/FinanceContext";
import usePagination from "../../hooks/usePagination";
import Filters from "../../components/Filters/Filters";
import useFilters from "../../hooks/useFilters";

const AllTransactions = () => {
  const { setCurrentPage } = usePage();
  const { finance } = useFinance();

  const {
    selectedType,
    setSelectedType,
    filteredTransactions,
    category,
    setCategory,
    month,
    setMonth,
    sort,
    setSort,
  } = useFilters(finance.transactions);

  const { page, setPage, totalPages, currentItems } =
    usePagination(filteredTransactions);

  useEffect(() => setCurrentPage("All Transaction"), [setCurrentPage]);

  return (
    <main>
      <TransactionSummary />

      <Filters
        showType
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        category={category}
        setCategory={setCategory}
        month={month}
        setMonth={setMonth}
        sort={sort}
        setSort={setSort}
      />

      <Transactions title="Transaction History" transactions={currentItems} />

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </main>
  );
};

export default AllTransactions;
