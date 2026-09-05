import "./Overview.css";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import OverviewSummary from "./OverviewSummary/OverviewSummary";
import Button from "../../components/Button/Button";
import AddTransaction from "../../components/AddTransaction/AddTransaction";

const Overview = () => {
  const { setCurrentPage } = usePage();

  useEffect(() => setCurrentPage("overview"), []);

  return (
    <main>
      <OverviewSummary />

      <AddTransaction />

      <Button isMobile={true} title="Add Transaction" />
    </main>
  );
};

export default Overview;
