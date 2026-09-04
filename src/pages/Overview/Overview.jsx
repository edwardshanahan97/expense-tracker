import "./Overview.css";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import OverviewSummary from "./OverviewSummary/OverviewSummary";

const Overview = () => {
  const { setCurrentPage } = usePage();

  useEffect(() => setCurrentPage("Overview"), []);

  return (
    <main>
      <OverviewSummary />
    </main>
  );
};

export default Overview;
