import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import { useFinance } from "../../context/FinanceContext";
import Button from "../../components/Button/Button";

const Settings = () => {
  const { setCurrentPage } = usePage();
  const { finance, changeName, changeCurrency, clearData } = useFinance();

  useEffect(() => setCurrentPage("settings"));

  return (
    <main>
      <div className="add-transaction__group">
        <label className="add-transation__label" htmlFor="name">
          Description
        </label>

        <input
          id="name"
          type="text"
          placeholder="eg. John"
          className={`add-transaction__input`}
          name="name"
          onChange={(event) => changeName(event.target.value)}
          value={finance.name}
        />
      </div>

      <select
        value={finance.currency}
        onChange={(event) => changeCurrency(event.target.value)}
      >
        <option value="€">€ - Euro</option>
        <option value="£">£ - Sterling</option>
        <option value="$">$ - Dollar</option>
      </select>

      <Button onClick={clearData} title="Clear Transactions" />
    </main>
  );
};

export default Settings;
