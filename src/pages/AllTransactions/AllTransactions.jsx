import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import TransactionSummary from "./TransactionSummary/TransactionSummary";
import Transactions from "../../components/Transactions/Transactions";
import { useFinance } from "../../context/FinanceContext";

const AllTransactions = () => {
  const { setCurrentPage } = usePage();
  const { finance } = useFinance();

  useEffect(() => setCurrentPage("All Transaction"), []);

  return (
    <main>
      <TransactionSummary />

      <Transactions
        title="Transaction History"
        transactions={finance.transactions}
      />
    </main>
  );
};

export default AllTransactions;
