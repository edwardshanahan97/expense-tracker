import { Plus } from "lucide-react";
import "./Button.css";

const Button = ({ title, isMobile }) => {
  return (
    <button className="button">
      {isMobile && <Plus color="var(--color-text-light)" />}
      <span className="button__text">{title}</span>
    </button>
  );
};

export default Button;
