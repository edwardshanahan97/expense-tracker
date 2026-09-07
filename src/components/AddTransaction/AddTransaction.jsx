import { ArrowDownRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { usePage } from "../../context/PageContext";
import "./AddTransaction.css";
import { useState } from "react";
import { categoriesData } from "../../data/categoriesData";
import Button from "../Button/Button";

const AddTransaction = ({ isActive, setIsActive }) => {
  const { currentPage } = usePage();
  const [category, setCategory] = useState("income");
  let categories = [];
  let title = "";

  if (currentPage === "overview") {
    title = "Transaction";
    if (category === "income") {
      categories = categoriesData.income;
    } else if (category === "expenses") {
      categories = categoriesData.expenses;
    }
  } else if (currentPage === "income") {
    title = "Income";
    categories = categoriesData.income;
  } else if (currentPage === "expenses") {
    title = "Expenses";
    categories = categoriesData.expenses;
  }

  const today = new Date();

  const localDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  return (
    <section className={`add-transaction ${isActive ? "active" : ""}`}>
      <div className="add-transaction__header">
        <ArrowLeft
          color="var(--color-text-secondary)"
          className="add-transaction__back"
          onClick={() => setIsActive(false)}
        />

        <h2 className="heading-2">Add {title}</h2>
      </div>

      <div className="add-transaction__types">
        <button
          onClick={() => setCategory("income")}
          className={`add-transaction__type add-transaction__income ${category === "income" ? "active" : ""}`}
        >
          <ArrowUpRight />

          <span>Income</span>
        </button>

        <button
          onClick={() => setCategory("expenses")}
          className={`add-transaction__type add-transaction__expenses ${category === "expenses" ? "active" : ""}`}
        >
          <ArrowDownRight />

          <span>Expense</span>
        </button>
      </div>

      <div className="add-transaction__form">
        <div className="add-transaction__group">
          <label className="add-transation__label" htmlFor="description">
            Description
          </label>

          <input
            id="description"
            type="text"
            placeholder="eg. Salery"
            className="add-transaction__input"
            name="description"
          />
        </div>

        <div className="add-transaction__group">
          <label className="add-transation__label" htmlFor="amount">
            Amount
          </label>

          <input
            id="amount"
            type="number"
            placeholder="0.00"
            className="add-transaction__input"
            name="amount"
          />
        </div>

        <div className="add-transaction__group">
          <label className="add-transation__label" htmlFor="category">
            Category
          </label>

          <select
            id="category"
            className="add-transaction__input add-transation__category"
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="add-transaction__group">
          <label className="add-transation__label" htmlFor="date">
            Date
          </label>

          <input
            type="date"
            max={localDate}
            id="date"
            className="add-transaction__input"
          />
        </div>
      </div>

      <Button title={`Add ${category}`} />

      <button
        onClick={() => setIsActive(false)}
        className="add-transaction__cancel"
      >
        Cancel
      </button>
    </section>
  );
};

export default AddTransaction;
