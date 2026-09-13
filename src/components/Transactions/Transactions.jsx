import "./Transactions.css";
import TransactionItem from "../../components/TransactionItem/TransactionItem";
import formatDate from "../../utils/formatDate";
import { Link } from "react-router-dom";

const Transactions = ({ title, transactions, link, to }) => {
  return (
    <section className="transactions">
      <div className="transactions__header">
        <h2 className="heading-2">{title}</h2>

        {link && <Link to={to}>{link}</Link>}
      </div>

      <ul className="transactions__list">
        {transactions.map(
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

export default Transactions;
