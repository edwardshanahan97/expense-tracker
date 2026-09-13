const getTotal = (transactions, type) => {
  return transactions
    .filter((transaction) => transaction.type === type)
    .reduce((acc, value) => acc + value.amount, 0);
};

export default getTotal;
