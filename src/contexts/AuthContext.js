import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    loading,
    currentUser,
  };
  return <AuthContext.Provider value={{ ...value }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
