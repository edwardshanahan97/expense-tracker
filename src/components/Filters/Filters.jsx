import { categoriesData } from "../../data/categoriesData";
import "./Filters.css";
const Filters = ({
  type,
  showType,
  selectedType,
  setSelectedType,
  category,
  setCategory,
  month,
  setMonth,
  sort,
  setSort,
}) => {
  const categories = type
    ? categoriesData[type]
    : selectedType === ""
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

      <input
        value={month}
        type="month"
        onChange={(event) => setMonth(event.target.value)}
      />

      <select value={sort} onChange={(event) => setSort(event.target.value)}>
        <option value="">Sort By</option>
        <option value="new">Newest</option>
        <option value="old">Oldest</option>
        <option value="highest">Highest</option>
        <option value="lowest">Lowest</option>
      </select>
    </section>
  );
};

export default Filters;
