const formatDate = (date = "") => {
  const dateObj = new Date(date);
  const month = dateObj
    .toLocaleString("default", { month: "long" })
    .slice(0, 3);
  const year = dateObj.getFullYear();
  const day = dateObj.getDate();

  const nthNumber = (number) => {
    if (number > 3 && number < 21) {
      return "th";
    }

    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${nthNumber(day)} ${month}, ${year}`;
};

export default formatDate;
