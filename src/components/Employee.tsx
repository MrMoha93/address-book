import { useParams } from "react-router-dom";
import { useUsers } from "../context/UserContext";

export default function Employee() {
  const { id } = useParams();
  const employee = useUsers().find((u) => u.id === id);

  if (!employee) return;

  return (
    <div className="m-4 p-4 rounded shadow-xl">
      <img src={employee.avatar} className="rounded-full" />
      <div className="text-xl font-bold mt-2">{employee.name}</div>
      <p>{employee.phone}</p>
      <p>{employee.email}</p>
    </div>
  );
}
