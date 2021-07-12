import { useAuth } from "../contexts/authContext";
import AdminProvider from "../contexts/adminContext";
import { Switch, Route } from "react-router-dom";
import AppBar from "../components/shared/AppBar";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
  },
  main: {
    padding: "1rem 12px",
    width: "100%",
    position: "relative",

    [theme.breakpoints.up("md")]: {
      padding: "3rem",
    },
  },
}));
export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();
  return (
    <AdminProvider>
      <div className={classes.root}>
        <AppBar />
        <main className={classes.main}>{children}</main>
      </div>
    </AdminProvider>
  );
};

export default Layout;
