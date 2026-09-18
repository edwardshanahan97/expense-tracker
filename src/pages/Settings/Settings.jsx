import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import { useFinance } from "../../context/FinanceContext";
import Button from "../../components/Button/Button";
import "./Settings.css";

const Settings = () => {
  const { setCurrentPage } = usePage();
  const { finance, changeName, changeCurrency, clearData } = useFinance();

  useEffect(() => {
    setCurrentPage("settings");
  }, [setCurrentPage]);

  const handleClear = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all transactions? This cannot be undone.",
    );

    if (confirmed) {
      clearData();
    }
  };

  return (
    <main className="settings">
      <div className="settings__header">
        <p>Manage your personal preferences and finance data.</p>
      </div>

      <section className="settings__card">
        <div className="settings__section">
          <div className="settings__section-info">
            <h2>Profile</h2>
            <p>Change the name displayed on your account.</p>
          </div>

          <div className="settings__field">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              placeholder="e.g. Edward"
              value={finance.name}
              onChange={(event) => changeName(event.target.value)}
            />
          </div>
        </div>

        <div className="settings__divider" />

        <div className="settings__section">
          <div className="settings__section-info">
            <h2>Currency</h2>
            <p>Choose the currency used throughout the app.</p>
          </div>

          <div className="settings__field">
            <label htmlFor="currency">Currency</label>

            <select
              id="currency"
              value={finance.currency}
              onChange={(event) => changeCurrency(event.target.value)}
            >
              <option value="€">€ - Euro</option>
              <option value="£">£ - Sterling</option>
              <option value="$">$ - Dollar</option>
            </select>
          </div>
        </div>
      </section>

      <section className="settings__danger">
        <div>
          <h2>Clear transactions</h2>
          <p>
            Permanently remove all of your transactions. Your name and currency
            settings will not be changed.
          </p>
        </div>

        <Button
          onClick={handleClear}
          title="Clear Transactions"
          className="button--danger"
        />
      </section>
    </main>
  );
};

export default Settings;
