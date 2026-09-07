import "./Income.css";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import Button from "../../components/Button/Button";
import AddTransaction from "../../components/AddTransaction/AddTransaction";

const Income = ({ isActive, setIsActive }) => {
  const { setCurrentPage } = usePage();

  useEffect(() => setCurrentPage("income"), []);
  return (
    <main>
      <AddTransaction isActive={isActive} setIsActive={setIsActive} />
      <Button
        className="button--fixed"
        isMobile={true}
        title="Add Income"
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </main>
  );
};

export default Income;
