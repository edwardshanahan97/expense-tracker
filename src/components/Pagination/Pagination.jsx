import "./Pagination.css";

const Pagination = ({ page, setPage, totalPages }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <section className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setPage(pageNumber)}
          className={page === pageNumber ? "pagination__page--active" : ""}
        >
          {pageNumber}
        </button>
      ))}

      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Next
      </button>
    </section>
  );
};

export default Pagination;
