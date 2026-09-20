import { useState } from "react";

const usePagination = (items, itemsPerPage = 10) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentPage = Math.min(page, Math.max(totalPages, 1));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = items.slice(startIndex, endIndex);

  return {
    page: currentPage,
    setPage,
    totalPages,
    currentItems,
  };
};

export default usePagination;
