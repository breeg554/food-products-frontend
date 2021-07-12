import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AuthProvider from "./contexts/authContext";
import Loading from "./components/shared/Loading";
import Layout from "./components/Layout";
import PrivateRoute from "./PrivateRoute";
import PreviewPanel from "./pages/PreviewPanel";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
const UserPanel = lazy(() => import("./pages/UserPanel"));

const App = () => {
  return (
    <AuthProvider>
      <CssBaseline />
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Layout>
          <Suspense fallback={<Loading />}>
            <PrivateRoute exact path="/" component={PreviewPanel} />
            <PrivateRoute exact path="/users" component={UserPanel} />
          </Suspense>
        </Layout>
      </Switch>
    </AuthProvider>
  );
};

export default App;
