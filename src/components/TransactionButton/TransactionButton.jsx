import { Plus } from "lucide-react";
import { usePage } from "../../context/PageContext";
import "./TransactionButton.css";

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
    <div className="add-transaction">
      <button className="add-transaction__mobile">
        <Plus />
        <span>{title}</span>
      </button>
    </div>
  );
};

export default TransactionButton;
