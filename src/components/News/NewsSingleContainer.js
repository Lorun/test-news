import React from 'react';
import { Redirect } from 'react-router-dom';

import NewsSingle from './NewsSingle';

class NewsSingleContainer extends React.Component {

    state = {
        redirectToNews: false,
    }

    handleDelete = () => {
        this.setState({
            redirectToNews: true,
        }, () => {
            this.props.onDelete(this.props.newsItem.id);
        });
    }

    render() {
        const {
            title,
            image,
            content,
        } = this.props.newsItem;

        return this.state.redirectToNews
            ? <Redirect to="/news" />
            : <NewsSingle
                title={title}
                image={image}
                content={content}
                onDelete={this.handleDelete}
            />;
    }
}

export default NewsSingleContainer;
