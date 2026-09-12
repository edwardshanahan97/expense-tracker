import "./Overview.css";
import { useEffect, useState } from "react";
import { usePage } from "../../context/PageContext";
import OverviewSummary from "./OverviewSummary/OverviewSummary";
import Button from "../../components/Button/Button";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import RecentTransactions from "../../components/RecentTransactions/RecentTransactions";
import { useFinance } from "../../context/FinanceContext";

const Overview = ({ isActive, setIsActive }) => {
  const { setCurrentPage } = usePage();
  const { finance } = useFinance();

  useEffect(() => setCurrentPage("overview"), []);

  return (
    <main className="overview">
      <OverviewSummary />

      <AddTransaction isActive={isActive} setIsActive={setIsActive} />

      <RecentTransactions
        title="Recent Transaction"
        transactions={finance.transactions}
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
