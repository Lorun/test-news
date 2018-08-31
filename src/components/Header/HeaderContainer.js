import React from 'react';

import auth from '../../utils/auth';

import withAuth from '../HOCs/withAuth';
import Header from './Header'


class HeaderContainer extends React.Component {

    handleSignOut = () => {
        auth.signOut();
    }

    render() {
        return <Header {...this.props} onSignOut={this.handleSignOut} />
    }
}

export default withAuth(HeaderContainer);
