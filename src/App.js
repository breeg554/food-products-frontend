import { Route, Switch } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
const App = () => {
  return (
    <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </AuthProvider>
  );
};

export default App;
