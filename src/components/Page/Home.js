import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import injectSheet from 'react-jss';

const styles = {
    layout: {
        padding: 20,
    }
};

function Home({classes}) {
    return (
        <div className={classes.layout}>
            <h1>Home page</h1>
            <p>
                <Button variant="contained" color="primary" component={Link} to="/news">News</Button>
            </p>
        </div>
    );
}

export default injectSheet(styles)(Home);
