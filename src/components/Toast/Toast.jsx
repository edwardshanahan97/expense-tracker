import "./Toast.css";
import { useToast } from "../../context/ToastContext";
import { useEffect } from "react";

const Toast = () => {
  const { showToast, setShowToast, message } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [showToast]);
  return (
    <div className={`toast ${showToast ? "active" : ""}`}>
      <p className="toast__message">{message}</p>
    </div>
  );
};

export default Toast;
