import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUser } from "../types";
import Loading from "../components/shared/Loading";
import api from "../axios";

interface AuthContextTypes {
  loading: boolean;
  currentUser: CurrentUser | null;
  signIn: (email: string, password: string) => void;
  logOut: () => void;
  getUserDetails: () => void;
}

const AuthContext = createContext<AuthContextTypes>(null!);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    api
      .post("/signin", {
        email,
        password,
      })
      .then((res) => {
        setCurrentUser(res.data.user);
        api.defaults.headers.common["X-CSRF-Token"] = res.data.csrfToken;
      })
      .then((res) => {
        history.push(currentUser?.role === 1 ? "/admin-panel" : "/");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };
  const logOut = async () => {
    api
      .post("/logout", { id: currentUser?._id })
      .catch((err) => console.log(err.response));
    setCurrentUser(null);
  };
  const getUserDetails = async () => {
    api
      .get("/user")
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    // signIn();
    // const getCsrfToken = async () => {
    //   const { data } = await api.get("/csrf-token");
    //   api.defaults.headers.common["X-CSRF-Token"] = data.csrfToken;
    // };
    // getCsrfToken();
    getUserDetails();
  }, []);

  return (
    <AuthContext.Provider
      value={{ loading, currentUser, signIn, logOut, getUserDetails }}
    >
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
