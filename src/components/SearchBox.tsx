import { SearchBoxProps } from "../types";

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <input
      className="w-80 p-2 border-2 border-neutral-500 rounded bg-white text-black 
             dark:bg-gray-800 dark:text-white"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
