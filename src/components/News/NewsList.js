import React from 'react';

import Grid from '@material-ui/core/Grid';

import NewsItem from './NewsItem';

function trimText(text, length) {
    return text.substring(0, length);
}

function NewsList({ news }) {
    return (
        <Grid container spacing={40}>
            {news.map(item =>
                <NewsItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    content={trimText(item.content, 500)}
                />
            )}
        </Grid>
    );
}

export default NewsList;
