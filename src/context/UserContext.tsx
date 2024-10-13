import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUsers } from "../services/userService";
import { User, User as UserType } from "../types";

const UserContext = createContext([] as User[]);

export default function UserProvider({ children }: PropsWithChildren) {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
}

export function useUsers() {
  return useContext(UserContext);
}
