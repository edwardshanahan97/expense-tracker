import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import { useFinance } from "../../context/FinanceContext";

const Settings = () => {
  const { setCurrentPage } = usePage();
  const { finance, changeName } = useFinance();

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
    </main>
  );
};

export default Settings;
