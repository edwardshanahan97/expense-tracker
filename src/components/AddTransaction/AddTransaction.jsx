import { ArrowDownRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { usePage } from "../../context/PageContext";
import "./AddTransaction.css";
import { useState } from "react";
import { categoriesData } from "../../data/categoriesData";
import Button from "../Button/Button";

const AddTransaction = ({ isActive, setIsActive }) => {
  const { currentPage } = usePage();
  const [category, setCategory] = useState("income");
  const [error, setError] = useState({
    description: false,
    amount: false,
    category: false,
    date: false,
  });
  let categories = [];
  let title = "";

  if (currentPage === "overview") {
    title = category;
    if (category === "income") {
      categories = categoriesData.income;
    } else if (category === "expenses") {
      categories = categoriesData.expenses;
    }
  } else if (currentPage === "income") {
    title = category;
    categories = categoriesData.income;
  } else if (currentPage === "expenses") {
    title = category;
    categories = categoriesData.expenses;
  }

  const handleForm = (event) => {
    event.preventDefault();

    const description = event.target.elements.description.value.trim();
    const amount = event.target.elements.amount.value;
    const categoryValue = event.target.elements.category.value;
    const dateValue = event.target.elements.date.value;

    const isDescriptionValid = description !== "";
    const isAmountValid = amount !== "" && amount > 0;
    const isCategoryValid = categoryValue !== "";
    const isDateValid = dateValue !== "";

    if (
      !isDescriptionValid ||
      !isAmountValid ||
      !isCategoryValid ||
      !isDateValid
    ) {
      setError({
        description: !isDescriptionValid,
        amount: !isAmountValid,
        category: !isCategoryValid,
        date: !isDateValid,
      });
      return;
    } else {
      setError({
        description: false,
        amount: false,
        category: false,
        date: false,
      });
    }
  };

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

      {currentPage === "overview" && (
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
      )}

      <form
        id="add-transaction"
        onSubmit={handleForm}
        className="add-transaction__form"
        noValidate
      >
        <div className="add-transaction__group">
          <label className="add-transation__label" htmlFor="description">
            Description
            {error.description && (
              <span className="add-transaction__error">
                Description is required
              </span>
            )}
          </label>

          <input
            id="description"
            type="text"
            placeholder="eg. Salery"
            className={`add-transaction__input ${error.description && "error"}`}
            name="description"
            required
          />
        </div>

        <div className="add-transaction__group">
          <label className="add-transation__label" htmlFor="amount">
            Amount
            {error.amount && (
              <span className="add-transaction__error">Amount is required</span>
            )}
          </label>

          <input
            id="amount"
            type="number"
            placeholder="0.00"
            className={`add-transaction__input ${error.amount && "error"}`}
            name="amount"
            required
          />
        </div>

        <div className="add-transaction__group">
          <label className="add-transation__label" htmlFor="category">
            Category
            {error.category && (
              <span className="add-transaction__error">
                Please select a category
              </span>
            )}
          </label>

          <select
            id="category"
            className={`add-transaction__input add-transaction__category ${error.category && "error"}`}
            required
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
            {error.date && (
              <span className="add-transaction__error">Date is required</span>
            )}
          </label>

          <input
            type="date"
            max={localDate}
            id="date"
            className={`add-transaction__input ${error.date && "error"}`}
            required
          />
        </div>
      </form>

      <Button form={"add-transaction"} title={`Save ${category}`} />

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
