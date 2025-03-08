import { PaginationProps } from "../types";

function Pagination({
  totalCount,
  pageSize,
  selectedPage,
  onPageSelect,
}: PaginationProps) {
  const pageCount = Math.ceil(totalCount / pageSize);
  if (pageCount <= 1) return null;

  const pages: number[] = [];
  for (let index = 1; index <= pageCount; index++) {
    pages.push(index);
  }

  return (
    <div className="flex justify-center m-3">
      <div className="join">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageSelect(page)}
            className={`join-item btn ${
              selectedPage === page ? "btn-active" : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
