import { Plus } from "lucide-react";
import { usePage } from "../../context/PageContext";
import "./Button.css";

const TransactionButton = () => {
  const { currentPage } = usePage();
  let title = "";

  if (currentPage === "overview") {
    title = "Add Transaction";
  } else if (currentPage === "income") {
    title = "Add Income";
  } else {
    title = "Add Expense";
  }

  return (
    <button className="button">
      <Plus color="var(--color-text-light)" />
      <span className="button__text">{title}</span>
    </button>
  );
};

export default TransactionButton;
