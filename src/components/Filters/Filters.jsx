import { categoriesData } from "../../data/categoriesData";

const Filters = ({
  showType,
  selectedType,
  setSelectedType,
  category,
  setCategory,
}) => {
  const categories =
    selectedType === ""
      ? [...categoriesData.income, ...categoriesData.expenses]
      : categoriesData[selectedType];

  const handleType = (event) => {
    setSelectedType(event.target.value);
    setCategory("");
  };

  return (
    <section className="filters">
      {showType && (
        <select
          onChange={handleType}
          value={selectedType}
          className="filters__type"
        >
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
        </select>
      )}

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Filters;
