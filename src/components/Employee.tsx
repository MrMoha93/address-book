import { useParams } from "react-router-dom";
import { useUsers } from "../context/UserContext";

export default function Employee() {
  const { id } = useParams();
  const employee = useUsers().find((u) => u.id === id);

  return <h1> {employee?.name}</h1>;
}
