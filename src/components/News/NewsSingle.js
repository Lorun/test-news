import React from 'react';
import { Link } from 'react-router-dom';

import injectStyles from 'react-jss';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    controls: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    paper: {
        padding: 20,
        '&:after': {
            content: '""',
            display: 'block',
            height: 0,
            clear: 'both',
        },
    },
    title: {
        marginBottom: 20,
    },
    image: {
        float: 'left',
        margin: '0 30px 20px 0',
    },
};

function NewsSingle({ title, image, content, onDelete, classes }) {
    return (
        <div>
            <div className={classes.controls}>
                <Button color="primary" component={Link} to="/news">All News</Button>
                <Button color="secondary" onClick={onDelete}>Delete</Button>
            </div>
            <Paper className={classes.paper}>
                <Typography variant="title" color="inherit" className={classes.title}>{title}</Typography>
                <img src={image} width="400" alt={title} className={classes.image} />
                <Typography>{content}</Typography>
            </Paper>
        </div>
    );
}

export default injectStyles(styles)(NewsSingle);
