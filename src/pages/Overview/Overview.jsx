import "./Overview.css";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import OverviewSummary from "./OverviewSummary/OverviewSummary";
import Button from "../../components/Button/Button";

const Overview = () => {
  const { setCurrentPage } = usePage();

  useEffect(() => setCurrentPage("overview"), []);

  return (
    <main>
      <OverviewSummary />

      <Button />
    </main>
  );
};

export default Overview;
