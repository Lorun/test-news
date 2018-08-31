import React from 'react';

import injectSheet from 'react-jss';

import NewsContainer from '../News/NewsContainer';

const styles = {
    layout: {
        padding: 20,
    }
};

function News(props) {
    return (
        <div className={props.classes.layout}>
            <NewsContainer {...props} />
        </div>
    );
}

export default injectSheet(styles)(News);
