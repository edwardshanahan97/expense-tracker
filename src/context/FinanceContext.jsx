import { createContext, useContext, useState } from "react";
import { useToast } from "./ToastContext";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const { setMessage, setShowToast } = useToast();

  const [finance, setFinance] = useState({
    name: "",
    currency: "EURO",
    transactions: [],
  });

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
