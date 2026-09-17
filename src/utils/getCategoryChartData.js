const getCategoryChartData = (transactions) => {
  const chartData = transactions.filter(
    (transaction) =>
      transaction.date.slice(0, 4) === String(new Date().getFullYear()) &&
      transaction.date.slice(5, 7) ===
        String(new Date().getMonth() + 1).padStart(2, "0"),
  );

  return chartData.reduce((acc, transaction) => {
    const category = acc.find((item) => item.category === transaction.category);

    if (category) {
      category.amount += transaction.amount;
    } else {
      acc.push({
        category: transaction.category,
        amount: transaction.amount,
      });
    }
    return acc;
  }, []);
};

export default getCategoryChartData;
