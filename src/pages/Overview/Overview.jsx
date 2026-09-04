import "./Overview.css";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import OverviewSummary from "./OverviewSummary/OverviewSummary";
import TransactionButton from "../../components/TransactionButton/TransactionButton";

const Overview = () => {
  const { setCurrentPage } = usePage();

  useEffect(() => setCurrentPage("overview"), []);

  return (
    <main>
      <OverviewSummary />

      <TransactionButton />
    </main>
  );
};

export default Overview;
