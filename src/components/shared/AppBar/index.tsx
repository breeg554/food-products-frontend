import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Nav from "../Nav";
import Popover from "../Popover";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
}));

const Layout = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="space-between"
            width="100%"
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Box flexGrow={1} display="flex" justifyContent="flex-end">
              <IconButton aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton
                aria-label="display more actions"
                edge="end"
                color="inherit"
                onClick={handleOpenMenu}
              >
                <MoreIcon />
              </IconButton>
              <Popover open={open} handleClose={handleClose} anchorEl={anchorEl} />
            </Box>
          </Box>
          <Box>
            <Typography className={classes.title} variant="h5" noWrap>
              Użytkownicy
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Nav mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </>
  );
};

export default Layout;
