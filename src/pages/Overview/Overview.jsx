import { useEffect } from "react";
import { usePage } from "../../context/PageContext";

const Overview = () => {
  const { setCurrentPage } = usePage();

  useEffect(() => setCurrentPage("Overview"), []);

  return <h1>Overview</h1>;
};

export default Overview;
