import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "./ToastContext";
import getMonthlyTotal from "../utils/getMonthlyTotal";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const { setMessage, setShowToast } = useToast();
  const localFinance = JSON.parse(localStorage.getItem("finance")) || {
    name: "",
    currency: "EURO",
    transactions: [],
  };

  const [finance, setFinance] = useState(localFinance);

  useEffect(() => {
    localStorage.setItem("finance", JSON.stringify(finance));
  }, [finance]);

  const addTransaction = (transaction) => {
    setFinance((prev) => ({
      ...prev,
      transactions: [...prev.transactions, transaction],
    }));

    setShowToast(true);

    setMessage(`${transaction.category} added`);
  };

  const getBalance = () => {
    const totalIncome = finance.transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((acc, value) => acc + value.amount, 0);

    const totalExpenses = finance.transactions
      .filter((transaction) => transaction.type === "expenses")
      .reduce((acc, value) => acc + value.amount, 0);

    return totalIncome - totalExpenses;
  };

  const thisMonthIncome = () => getMonthlyTotal(finance.transactions, "income");

  const thisMonthExpenses = () =>
    getMonthlyTotal(finance.transactions, "expenses");

  return (
    <FinanceContext.Provider
      value={{
        finance,
        addTransaction,
        getBalance,
        thisMonthIncome,
        thisMonthExpenses,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);
