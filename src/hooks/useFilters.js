import { useState } from "react";

const useFilters = (transactions) => {
  const [selectedType, setSelectedType] = useState("");
  const [category, setCategory] = useState("");
  const [month, setMonth] = useState("");
  const [sort, setSort] = useState("");

  const filteredTransactions = transactions.filter(
    (transaction) =>
      (transaction.type === selectedType || selectedType === "") &&
      (transaction.category === category || category === "") &&
      (transaction.date.startsWith(month) || month === ""),
  );

  filteredTransactions.sort((a, b) => {
    if (sort === "new") {
      return b.date.localeCompare(a.date);
    } else if (sort === "old") {
      return a.date.localeCompare(b.date);
    } else if (sort === "highest") {
      return b.amount - a.amount;
    } else if (sort === "lowest") {
      return a.amount - b.amount;
    }

    return 0;
  });

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
