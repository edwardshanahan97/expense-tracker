import { createContext, useContext, useState } from "react";

const FinanceContext = createContext();

export const FinanceProverider = ({ children }) => {
  const [finance, setFinance] = useState({
    name: "",
    currency: "EURO",
    transactions: [],
  });

  return (
    <FinanceContext.Provider value={{}}>{children}</FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);
