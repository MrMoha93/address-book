import { useUsers } from "./context/UserContext";
import User from "./components/User";
import { useEffect, useState } from "react";
import _ from "lodash";
import { SortOrder } from "./types";
import SearchBox from "./components/SearchBox";
import SortBox from "./components/SortBox";
import { paginate } from "./utils";
import { PAGE_SIZE } from "./services/userService";
import Pagination from "./components/Pagination";

export default function App() {
  const users = useUsers();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const filteredUsers = searchQuery
    ? users.filter((u) =>
        u.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : users;

  const sortedUsers = _.orderBy(filteredUsers, "name", sortOrder);
  const paginatedUsers = paginate(sortedUsers, PAGE_SIZE, currentPage);

  return (
    <div className="m-8">
      <h1 className="text-3xl ">Användare</h1>
      <SearchBox value={searchQuery} onChange={setSearchQuery} />
      <SortBox value={sortOrder} onChange={setSortOrder} />
      <Pagination
        pageSize={PAGE_SIZE}
        totalCount={filteredUsers.length}
        selectedPage={currentPage}
        onPageSelect={setCurrentPage}
      />
      <ul className="grid grid-cols-1 laptop:grid-cols-4 gap-8 justify-items-center mt-4">
        {paginatedUsers.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
