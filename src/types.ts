export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface UserProps {
  user: User;
}
