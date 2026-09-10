import { useContext } from "react";
import { createContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <ToastContext.Provider
      value={{ showToast, setShowToast, message, setMessage }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
