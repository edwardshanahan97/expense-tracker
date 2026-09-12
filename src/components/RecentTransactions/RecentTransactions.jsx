import { Link } from "react-router-dom";
import "./RecentTransaction.css";

import formatDate from "../../utils/formatDate";
import TransactionItem from "../TransactionItem/TransactionItem";

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
            <TransactionItem
              key={id}
              id={id}
              type={type}
              description={description}
              amount={amount}
              category={category}
              date={formatDate(date)}
            />
          ),
        )}
      </ul>
    </section>
  );
};

export default RecentTransactions;
