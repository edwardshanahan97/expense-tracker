import "./TransactionItem.css";
import { ArrowDown, ArrowUp, Trash } from "lucide-react";
import { useFinance } from "../../context/FinanceContext";

const TransactionItem = ({
  id,
  type,
  description,
  category,
  amount,
  date,
  isRecent,
}) => {
  const { finance, removeTransaction } = useFinance();

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

      <span className="transactions-item__amount">
        {finance.currency}
        {amount}
      </span>

      {!isRecent && (
        <button
          onClick={() => removeTransaction(id)}
          className="transaction-item__remove"
          aria-label="Delete transaction"
        >
          <Trash />
        </button>
      )}
    </li>
  );
};

export default TransactionItem;
