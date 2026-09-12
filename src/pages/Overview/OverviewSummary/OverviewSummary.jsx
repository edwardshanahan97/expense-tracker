import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import "./OverviewSummary.css";
import { useFinance } from "../../../context/FinanceContext";

const OverviewSummary = () => {
  const { getBalance, thisMonthIncome, thisMonthExpenses } = useFinance();

  const balance = getBalance();
  const totalIncome = thisMonthIncome();
  const totalExpenses = thisMonthExpenses();

  return (
    <section className="overview-summary">
      <div className="overview-summary__card overview-summary__balance">
        <div className="overview-summary__icon">
          <Wallet color="var(--color-primary)" strokeWidth={1.5} />
        </div>

        <div className="overview-summary__content">
          <h3 className="heading-3">Current Balance</h3>

          <h2 className="heading-2">€{balance}</h2>

          <p className="overview-summary__message">Your Balnace</p>
        </div>
      </div>

      <div className="overview-summary__card overview-summary__income">
        <div className="overview-summary__icon">
          <TrendingUp color="var(--color-income)" strokeWidth={1.5} />
        </div>

        <div className="overview-summary__content">
          <h3 className="heading-3">Total Income</h3>

          <h2 className="heading-2">€{totalIncome}</h2>

          <p className="overview-summary__message">This Month</p>
        </div>
      </div>

      <div className="overview-summary__card overview-summary__expense">
        <div className="overview-summary__icon">
          <TrendingDown color="var(--color-expenses)" strokeWidth={1.5} />
        </div>

        <div className="overview-summary__content">
          <h3 className="heading-3">Total Expenses</h3>

          <h2 className="heading-2">€{totalExpenses}</h2>

          <p className="overview-summary__message">This Month</p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSummary;
