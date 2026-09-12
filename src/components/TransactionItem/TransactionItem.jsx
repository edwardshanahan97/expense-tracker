import "./TransactionItem.css";
import { ArrowDown, ArrowUp } from "lucide-react";

const TransactionItem = ({ id, type, description, category, amount, date }) => {
  return (
    <li className="transactions-item">
      {type === "income" ? (
        <ArrowUp className="transactions-item__icon transactions-item__income" />
      ) : (
        <ArrowDown className="transactions-item__icon transactions-item__expense" />
      )}

      <div className="transactions-item__group">
        <span className="transactions-item__description">{description}</span>

        <span className="transactions-item__category">{category}</span>
      </div>

      <span className="transactions-item__date">{date}</span>

      <span className="transactions-item__amount">€{amount}</span>
    </li>
  );
};

export default TransactionItem;
