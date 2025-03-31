import { SortBoxProps, SortOrder } from "../types";

export default function SortBox({ value, onChange }: SortBoxProps) {
  return (
    <select
      className="m-4 w-40 p-2 border-2 border-neutral-500 rounded bg-white text-black 
             dark:bg-gray-800 dark:text-white"
      value={value}
      onChange={(e) => onChange(e.target.value as SortOrder)}
    >
      <option value="asc">Stigande</option>
      <option value="desc">Fallande</option>
    </select>
  );
}
