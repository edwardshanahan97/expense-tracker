import { Plus } from "lucide-react";
import "./Button.css";

const Button = ({ title, isMobile, className, isActive, setIsActive }) => {
  return (
    <button
      onClick={setIsActive ? () => setIsActive(!isActive) : undefined}
      className={`button ${className}`}
    >
      {isMobile && <Plus color="var(--color-text-light)" />}
      <span className="button__text">{title}</span>
    </button>
  );
};

export default Button;
