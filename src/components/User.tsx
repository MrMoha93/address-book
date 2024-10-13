import { Link } from "react-router-dom";
import { UserProps } from "../types";

export default function User({ user }: UserProps) {
  return (
    <li className="w-full p-4 shadow rounded cursor-pointer hover:scale-105 transition-transform duration-300 ">
      <Link to={`/${user.id}`} className="flex items-center">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={user.avatar}
          alt={`${user.name} avatar`}
        />
        <div className="flex flex-col">
          <p className="font-semibold">{user.email}</p>
          <p className="text-gray-500">{user.name}</p>
          <p>Phone {user.phone}</p>
        </div>
        <div className="flex justify-between"></div>
      </Link>
    </li>
  );
}
