import "./Expenses.css";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import Button from "../../components/Button/Button";
import AddTransaction from "../../components/AddTransaction/AddTransaction";

const Expenses = ({ isActive, setIsActive }) => {
  const { setCurrentPage } = usePage();

  useEffect(() => setCurrentPage("expenses"), []);

  return (
    <main>
      <AddTransaction isActive={isActive} setIsActive={setIsActive} />
      <Button
        className="button--fixed"
        isMobile={true}
        title="Add Expense"
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </main>
  );
};

export default Expenses;
