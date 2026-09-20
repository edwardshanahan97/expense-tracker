import "./Toast.css";
import { useToast } from "../../context/ToastContext";
import { useEffect } from "react";

const Toast = () => {
  const { showToast, setShowToast, message } = useToast();

  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showToast, setShowToast]);
  return (
    <div className={`toast ${showToast ? "active" : ""}`}>
      <p className="toast__message">{message}</p>
    </div>
  );
};

export default Toast;
