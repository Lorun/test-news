import React from 'react';

import Header from './Header'

import auth from '../../utils/auth';

function withAuth(WrappedComponent) {
    return class WithAuth extends React.Component {

        state = {
            isAuth: auth.isAuth,
        }

        handleAuthChange = (isAuth) => {
            console.log('handleAuthChange', isAuth);
            this.setState({ isAuth });
        }

        componentDidMount() {
            auth.subscribe(this.handleAuthChange);
        }

        componentWillUnmount() {
            auth.unsubscribe(this.handleAuthChange);
        }

        render () {
            console.log(this.state.isAuth);
            return <WrappedComponent isAuth={this.state.isAuth} {...this.props} />;
        }
    }
}

class HeaderContainer extends React.Component {

    handleSignOut = () => {
        auth.signOut();
    }

    render() {
        return <Header {...this.props} onSignOut={this.handleSignOut} />
    }
}

export default withAuth(HeaderContainer);
