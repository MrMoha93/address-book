import { useUsers } from "./context/UserContext";
import User from "./components/User";

export default function () {
  const users = useUsers();

  return (
    <div className="m-8">
      <h1 className="text-3xl ">Användare</h1>
      <ul className="grid grid-cols-1 laptop:grid-cols-4 gap-8 justify-items-center mt-4">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
