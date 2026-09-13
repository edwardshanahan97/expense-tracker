import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import TransactionSummary from "./TransactionSummary/TransactionSummary";
import Transactions from "../../components/Transactions/Transactions";
import Pagination from "../../components/Pagination/Pagination";
import { useFinance } from "../../context/FinanceContext";
import usePagination from "../../hooks/usePagination";

const AllTransactions = () => {
  const { setCurrentPage } = usePage();
  const { finance } = useFinance();
  const { page, setPage, totalPages, currentItems } = usePagination(
    finance.transactions,
  );

  useEffect(() => setCurrentPage("All Transaction"), []);

  return (
    <main>
      <TransactionSummary />

      <Transactions title="Transaction History" transactions={currentItems} />

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </main>
  );
};

export default AllTransactions;
