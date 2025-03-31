import { useUsers } from "../context/UserContext";
import { useEffect, useState } from "react";
import { SortOrder } from "../types";
import { paginate, PAGE_SIZE } from "../utils";
import User from "./User";
import SearchBox from "./SearchBox";
import SortBox from "./SortBox";
import Pagination from "./Pagination";
import _ from "lodash";

export default function UserList() {
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
    <>
      <SearchBox value={searchQuery} onChange={setSearchQuery} />
      <SortBox value={sortOrder} onChange={setSortOrder} />
      <ul className="grid grid-cols-1 laptop:grid-cols-4 gap-8 justify-items-center mt-4">
        {paginatedUsers.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
      <Pagination
        pageSize={PAGE_SIZE}
        totalCount={filteredUsers.length}
        selectedPage={currentPage}
        onPageSelect={setCurrentPage}
      />
    </>
  );
}
