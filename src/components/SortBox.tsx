import { SortBoxProps } from "../types";

export default function SortBox({ value, onChange }: SortBoxProps) {
  const toggleSort = () => {
    onChange(value === "asc" ? "desc" : "asc");
  };

  return (
    <button
      onClick={toggleSort}
      className="m-4 px-4 py-2 border border-gray-400 rounded-full bg-white text-black 
               dark:bg-gray-800 dark:text-white flex items-center gap-2"
    >
      {value === "asc" ? (
        <i className="fa-solid fa-chevron-up text-gray-500" />
      ) : (
        <i className="fa-solid fa-chevron-down text-gray-500" />
      )}
    </button>
  );
}
