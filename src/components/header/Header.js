import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AppBar, Button, Toolbar } from '@material-ui/core';

function Header() {
  return (
    <div>
      <AppBar color="white" position="static">
        <Toolbar>
          <Button color="secondary" endIcon={<AccountCircleIcon />}>
            عضویت/ورود
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
