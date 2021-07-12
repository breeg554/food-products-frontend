export enum UserRole {
  USER = 0,
  ADMIN = 1,
}

export interface CurrentUser {
  email: string;
  name: string;
  surname: string;
  role: UserRole;
  _id: string;
}
export interface UsersProfiles {
  email: string;
  name: string;
  surname: string;
  _id: string;
}
export interface PaginationType {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  page: number;
  prevPage: null;
  totalDocs: number;
  totalPages: number;
}
