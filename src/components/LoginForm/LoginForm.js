import React from 'react';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


class LoginForm extends React.Component {

    state = {
        login: '',
        password: '',
    }

    handleLoginChange = (e) => {
        this.setState({
            login: e.target.value,
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { login, password } = this.state;
        this.props.onSubmit({
            login: login.trim(),
            password: password.trim(),
        });
    }

    render() {
        const { login, password } = this.state;
        const { errors } = this.props;
        return (
            <div>
                {errors.length > 0 &&
                    errors.map((error) => (
                        <div key={error}>{error}</div>
                    ))
                }
                <form onSubmit={this.handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="login">Login</InputLabel>
                        <Input
                            id="login"
                            name="login"
                            value={login}
                            onChange={this.handleLoginChange}
                            autoFocus
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            name="password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={this.handlePasswordChange}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="raised"
                        color="primary"
                    >
                        Login
                    </Button>
                </form>
            </div>

        );
    }
}

export default LoginForm;
