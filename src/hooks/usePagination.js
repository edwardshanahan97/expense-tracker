import { useState } from "react";

const usePagination = (items, itemsPerPage = 10) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;

  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return {
    page,
    setPage,
    totalPages,
    currentItems,
  };
};

export default usePagination;
