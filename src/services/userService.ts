import axios from "axios";
import { User } from "../types";

const API_URL = "https://randomuser.me/api/?results=50&seed=moha&nat=gb";

export async function getUsers(): Promise<User[]> {
  const res = await axios.get(API_URL);

  return res.data.results.map(
    (result: any) =>
      ({
        id: result.login.uuid,
        name: `${result.name.first} ${result.name.last}`,
        email: result.email,
        phone: result.phone,
        avatar: result.picture.large,
        country: result.location.country,
        city: result.location.city,
      } as User)
  );
}
