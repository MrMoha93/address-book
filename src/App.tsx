import { useUsers } from "./context/UserContext";
import User from "./components/User";
import { useState } from "react";
import _ from "lodash";
import { SortOrder } from "./types";
import SearchBox from "./components/SearchBox";
import SortBox from "./components/SortBox";

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
      <SearchBox value={searchQuery} onChange={setSearchQuery} />
      <SortBox value={sortOrder} onChange={setSortOrder} />
      <ul className="grid grid-cols-1 laptop:grid-cols-4 gap-8 justify-items-center mt-4">
        {sortedUsers.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
