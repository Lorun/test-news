import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import injectSheet from 'react-jss';

const styles = {
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
};

function NewsItem({ id, title, image, content, classes }) {
    return (
        <Grid item sm={12} md={6} lg={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="headline" component="h2">
                        <Link to={`/news/${id}`}>{title}</Link>
                    </Typography>
                    <Typography>
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button component={Link} to={`/news/${id}`} size="small" color="primary">
                        View
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default injectSheet(styles)(NewsItem);
