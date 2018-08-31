import React from 'react';
import { Link } from 'react-router-dom';

import injectSheet from 'react-jss';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    flex: {
        flexGrow: 1,
    }
};

function Header({ isAuth = false, onSignOut, classes }) {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit" className={classes.flex}>
                    Logo
                </Typography>
                {isAuth
                    ? <Button color="inherit" onClick={onSignOut}>Logout</Button>
                    : <Button color="inherit" component={Link} to="/login">Login</Button>
                }
            </Toolbar>
        </AppBar>
    );
}

export default injectSheet(styles)(Header);
