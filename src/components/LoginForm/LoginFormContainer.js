import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import LoginForm from './LoginForm';

import auth from '../../utils/auth';

const DEMO_LOGIN = 'login';
const DEMO_PASSWORD = 'password';

class LoginFormContainer extends React.Component {

    state = {
        errors: [],
        redirectToReferrer: false,
    }

    handleSubmit = ({ login, password }) => {
        const errors = [];
        // Simple validation
        if (login.length < 2) {
            errors.push('Your Login is too short!');
        } else {
            if (login.toLowerCase() !== DEMO_LOGIN) {
                errors.push('Login is not found!');
            }

            if (password !== DEMO_PASSWORD) {
                errors.push('Password is not correct!');
            }
        }

        if (errors.length > 0) {
            this.setState({ errors });
        } else {
            auth.authenticate();
            this.setState({ redirectToReferrer: true });
        }
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/news" } };
        const { redirectToReferrer, errors } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <LoginForm
                onSubmit={this.handleSubmit}
                errors={errors}
            />
        )
    }
}

export default withRouter(LoginFormContainer);