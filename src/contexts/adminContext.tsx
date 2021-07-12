import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { AxiosResponse } from "axios";
import { CurrentUser, UsersProfiles } from "../types";
import api from "../axios";

interface AdminContextTypes {
  users: UsersProfiles[];
  getUsers: () => Promise<AxiosResponse>;
}

const AdminContext = createContext<AdminContextTypes>(null!);

export const useAdmin = () => {
  return useContext(AdminContext);
};

const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<UsersProfiles[]>([]);

  const getUsers = async () => {
    return await api.get("/users/all").then((res) => {
      setUsers(res.data.docs);
      return res.data;
    });
  };

  return (
    <AdminContext.Provider value={{ users, getUsers }}>{children}</AdminContext.Provider>
  );
};

export default AdminProvider;
