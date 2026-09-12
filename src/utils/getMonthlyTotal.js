const getMonthlyTotal = (transactions, type) => {
  const now = new Date();

  return transactions
    .filter((transaction) => {
      const date = new Date(transaction.date);

      return (
        transaction.type === type &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      );
    })
    .reduce((acc, value) => acc + value.amount, 0);
};

export default getMonthlyTotal;
