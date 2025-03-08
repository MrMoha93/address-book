interface Props {
  totalCount: number;
  pageSize: number;
  selectedPage: number;
  onPageSelect: (page: number) => void;
}

function Pagination({
  totalCount,
  pageSize,
  selectedPage,
  onPageSelect,
}: Props) {
  const pageCount = Math.ceil(totalCount / pageSize);
  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-center m-3">
      <div className="join">
        <button
          onClick={() => onPageSelect(1)}
          className={`join-item btn ${selectedPage === 1 ? "btn-active" : ""}`}
        >
          1
        </button>

        <button
          onClick={() => onPageSelect(2)}
          className={`join-item btn ${selectedPage === 2 ? "btn-active" : ""}`}
        >
          2
        </button>
      </div>
    </div>
  );
}

export default Pagination;
