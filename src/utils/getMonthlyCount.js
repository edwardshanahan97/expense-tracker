const getMonthlyCount = (transactions, type) => {
  const now = new Date();

  return transactions.filter((transaction) => {
    const date = new Date(transaction.date);

    return (
      transaction.type === type &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  }).length;
};

export default getMonthlyCount;
