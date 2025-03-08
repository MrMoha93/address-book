export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: string;
  country: string;
  city: string;
}

export interface UserProps {
  user: User;
}

export type SortOrder = "asc" | "desc";

export interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export interface SortBoxProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

export interface PaginationProps {
  totalCount: number;
  pageSize: number;
  selectedPage: number;
  onPageSelect: (page: number) => void;
}
