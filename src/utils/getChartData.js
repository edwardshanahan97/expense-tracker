const getChartData = (transactions) => {
  const months = Array(12)
    .fill(0)
    .map((_, index) => {
      const monthNumber = index + 1;
      const month = String(monthNumber).padStart(2, "0");
      const monthName = new Date(2000, monthNumber - 1).toLocaleString("en", {
        month: "short",
      });
      return {
        month,
        monthName,
        income: 0,
        expenses: 0,
      };
    });

  return transactions
    .filter(
      (transaction) =>
        transaction.date.slice(0, 4) === String(new Date().getFullYear()),
    )
    .reduce((acc, transaction) => {
      const month = transaction.date.slice(5, 7);
      const monthData = acc.find((item) => item.month === month);

      if (monthData) {
        if (transaction.type === "income") {
          monthData.income += transaction.amount;
        } else {
          monthData.expenses += transaction.amount;
        }
      }

      return acc;
    }, months)
    .sort((a, b) => a.month - b.month);
};

export default getChartData;
