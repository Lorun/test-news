import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from '../../utils/auth';

function authProtected(WrappedComponent) {
    return class AuthProtected extends React.Component {

        state = {
            isAuth: auth.isAuth,
        }

        checkAuth = (isAuth) => {
            if (!isAuth) {
                this.setState({ isAuth });
            }
        }

        componentDidMount() {
            auth.subscribe(this.checkAuth);
        }

        componentWillUnmount() {
            auth.unsubscribe(this.checkAuth);
        }

        render() {
            return this.state.isAuth
                ? <WrappedComponent {...this.props} />
                : <Redirect to="/login" />
        }
    }
}

export default authProtected;
