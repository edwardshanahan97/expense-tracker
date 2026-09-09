import { createContext, useContext, useState } from "react";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
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

    console.log(finance);
  };

  return (
    <FinanceContext.Provider value={{ addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);
