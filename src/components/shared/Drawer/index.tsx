import React from "react";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
    background: "#18202c",
  },
  divider: {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  listText: {
    color: "#bdbdbd",
    textDecoration: "none",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textDecoration: "none",
  },
  icon: {
    minWidth: "40px",
    color: "#bdbdbd",
  },
  header: {
    color: "#fff",
    paddingLeft: "16px",
    paddingTop: "16px",
  },
}));

const Drawer = () => {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.toolbar}>
        <ListItem button component={Link} to="/">
          <ListItemIcon className={classes.icon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Podgląd"} className={classes.listText} />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      <Typography component="h2" variant="h6" className={classes.header}>
        Użytkownicy
      </Typography>
      <List>
        <ListItem button component={Link} to="/users">
          <ListItemIcon className={classes.icon}>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Jakis tam text"} className={classes.listText} />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      <Typography component="h2" variant="h6" className={classes.header}>
        Produkty
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Jakis tam text"} className={classes.listText} />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      <Typography component="h2" variant="h6" className={classes.header}>
        Posiłki
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Jakis tam text"} className={classes.listText} />
        </ListItem>
      </List>
    </div>
  );
};

export default Drawer;
