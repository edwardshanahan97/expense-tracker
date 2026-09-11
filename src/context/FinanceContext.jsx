import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "./ToastContext";

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

  return (
    <FinanceContext.Provider value={{ addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);
