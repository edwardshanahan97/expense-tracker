import { ArrowDownRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { usePage } from "../../context/PageContext";
import "./AddTransaction.css";
import { useState } from "react";
import { categoriesData } from "../../data/categoriesData";
import Button from "../Button/Button";

const AddTransaction = () => {
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
    <section className="add-transaction">
      <div className="add-transaction__header">
        <ArrowLeft />

        <h2 className="heading-2">Add {title}</h2>
      </div>

      <div className="add-transaction__type">
        <button
          onClick={() => setCategory("income")}
          className="add-transaction__income"
        >
          <ArrowUpRight />

          <span>Income</span>
        </button>

        <button
          onClick={() => setCategory("expenses")}
          className="add-transaction__expense"
        >
          <ArrowDownRight />

          <span>Expense</span>
        </button>
      </div>

      <div className="add-transaction__form">
        <div className="add-transaction__group">
          <label className="add-transtion__label" htmlFor="description">
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
          <label className="add-transtion__label" htmlFor="amount">
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
          <label className="add-transtion__label" htmlFor="amount">
            Category
          </label>

          <select>
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="add-transaction__group">
          <label className="add-transtion__label" htmlFor="amount">
            Date
          </label>

          <input type="date" max={localDate} />
        </div>
      </div>

      <Button title={`Add ${category}`} />

      <button className="add-transaction__cancel">Cancel</button>
    </section>
  );
};

export default AddTransaction;
