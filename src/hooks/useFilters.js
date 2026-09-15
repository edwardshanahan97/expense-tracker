import { useState } from "react";

const useFilters = (transactions) => {
  const [selectedType, setSelectedType] = useState("");
  const [category, setCategory] = useState("");
  const [month, setMonth] = useState("");
  const [sort, setSort] = useState("");

  const filteredTransactions = transactions.filter(
    (transaction) =>
      (transaction.type === selectedType || selectedType === "") &&
      (transaction.category === category || category === ""),
  );

  return {
    filteredTransactions,
    selectedType,
    setSelectedType,
    category,
    setCategory,
    month,
    setMonth,
    sort,
    setSort,
  };
};

export default useFilters;
