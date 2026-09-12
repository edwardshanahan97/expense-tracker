import { Link } from "react-router-dom";
import "./RecentTransaction.css";
import { ArrowDown, ArrowUp } from "lucide-react";

const RecentTransactions = ({ title, transactions }) => {
  const recentTransaction = transactions
    .slice(-5)
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section className="recent-transactions">
      <div className="recent-transaction__header">
        <h2 className="heading-2">{title}</h2>

        <Link to="/all-transaction">View all</Link>
      </div>

      <ul className="recent-transactions__list">
        {recentTransaction.map(
          ({ id, type, description, amount, category, date }) => (
            <li className="recent-transactions__item" key={id}>
              {type === "income" ? (
                <ArrowUp className="recent-transaction__icon recent-transaction__income" />
              ) : (
                <ArrowDown className="recent-transaction__icon recent-transaction__expense" />
              )}

              <div className="recent-transaction__group">
                <span className="recent-transaction__description">
                  {description}
                </span>

                <span className="recent-transaction__category">{category}</span>
              </div>

              <span className="recent-transaction__date">{date}</span>

              <span className="recent-transaction__amount">€{amount}</span>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default RecentTransactions;
