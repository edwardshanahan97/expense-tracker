import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import TransactionSummary from "./TransactionSummary/TransactionSummary";

const AllTransactions = () => {
  const { setCurrentPage } = usePage();

  useEffect(() => setCurrentPage("All Transaction"), []);
  return (
    <main>
      <TransactionSummary />
    </main>
  );
};

export default AllTransactions;
