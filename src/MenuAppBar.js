import React, { useState } from 'react';
import { useFirebaseAuth } from '@use-firebase/auth';

import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import PresenceIndicator from './PresenceIndicator';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    position: 'relative',
  },
  logo: {
    width: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
  presence: {
    position: 'relative',
    left: -10,
    top: 15,
  },
});

const MenuAppBar = () => {
  const { isSignedIn, user, signOut } = useFirebaseAuth();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = !!anchorEl;

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeAndSignout = () => {
    handleClose(null);
    signOut();
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          <img
            alt="garage"
            src="https://uploads.codesandbox.io/uploads/user/dadc333f-4fd2-4f2d-9ce8-1d7a80efd28a/KkKR-garage.png"
            className={classes.logo}
          />
          Is My Garage Door Open?
        </Typography>
        {isSignedIn && (
          <div>
            <IconButton
              aria-owns={menuOpen ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {user.photoURL ? (
                <Avatar
                  alt={user.dislayName}
                  src={user.photoURL}
                  className={classes.avatar}
                />
              ) : (
                <Avatar alt={user.dislayName} className={classes.avatar}>
                  <PersonOutlineIcon className={classes.avatar} />
                </Avatar>
              )}
              <PresenceIndicator className={classes.presence} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={menuOpen}
              onClose={handleClose}
            >
              <MenuItem onClick={closeAndSignout}>Sign Out</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;
