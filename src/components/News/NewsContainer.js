import React from 'react';
import { Route } from 'react-router-dom';

import NewsList from './NewsList';
import NewsSingleContainer from './NewsSingleContainer';

import newsData from '../../data/news.json';

class NewsContainer extends React.Component {

    state = {
        news: [],
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                news: newsData,
            });
        }, 500);
    }

    handleNewsItemDelete = (id) => {
        const news = this.state.news.filter(item => item.id !== id);
        this.setState({ news });
    }

    renderSingleNews(id) {
        const newsItem = this.state.news.find(item => item.id === id);
        return newsItem
            ? <NewsSingleContainer newsItem={newsItem} onDelete={this.handleNewsItemDelete} />
            : <div>Page is not found!</div>;
    }


    render() {
        const { news } = this.state;
        const { match } = this.props;

        if (news.length === 0) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Route exact path={match.path} render={() => <NewsList news={news} />} />
                <Route path={`${match.path}/:newsId`} render={({match}) => this.renderSingleNews(match.params.newsId)} />
            </div>
        )
    }
}

export default NewsContainer;
