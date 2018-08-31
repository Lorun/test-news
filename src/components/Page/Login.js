import React from 'react';
import injectSheet from 'react-jss';

import LoginForm from '../LoginForm';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    paper: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        margin: '0 auto',
        maxWidth: 400,
    },
};

function Login({ classes }) {
    return (
        <Paper className={classes.paper}>
            <Typography variant="headline">Login</Typography>
            <LoginForm />
        </Paper>
    );
}

export default injectSheet(styles)(Login);
