import "./Overview.css";
import { useEffect, useState } from "react";
import { usePage } from "../../context/PageContext";
import OverviewSummary from "./OverviewSummary/OverviewSummary";
import Button from "../../components/Button/Button";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import { useFinance } from "../../context/FinanceContext";
import Transactions from "../../components/Transactions/Transactions";

const Overview = ({ isActive, setIsActive }) => {
  const { setCurrentPage } = usePage();
  const { finance } = useFinance();

  const recentTransaction = finance.transactions
    .slice(-5)
    .sort((a, b) => b.date.localeCompare(a.date));

  useEffect(() => setCurrentPage("overview"), []);

  return (
    <main className="overview">
      <OverviewSummary />

      <AddTransaction isActive={isActive} setIsActive={setIsActive} />

      <Transactions
        title="Recent Transaction"
        transactions={recentTransaction}
        link="View All"
        to="/all-transaction"
      />

      <Button
        className="button--fixed"
        isMobile={true}
        title="Add Transaction"
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </main>
  );
};

export default Overview;
