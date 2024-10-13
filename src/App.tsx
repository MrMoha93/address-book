import { useUsers } from "./context/UserContext";
import User from "./components/User";
import { useState } from "react";
import _ from "lodash";
import { SortOrder } from "./types";

export default function () {
  const users = useUsers();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const filteredUsers = searchQuery
    ? users.filter((u) =>
        u.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : users;

  const sortedUsers = _.orderBy(filteredUsers, "name", sortOrder);

  return (
    <div className="m-8">
      <h1 className="text-3xl ">Användare</h1>
      <input
        className="w-80 p-2 border-2 border-neutral-500 rounded"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        className="m-4 w-40 p-2 border-2 border-neutral-500 rounded "
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as SortOrder)}
      >
        <option value="asc">Stigande</option>
        <option value="desc">Fallande</option>
      </select>
      <ul className="grid grid-cols-1 laptop:grid-cols-4 gap-8 justify-items-center mt-4">
        {sortedUsers.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
