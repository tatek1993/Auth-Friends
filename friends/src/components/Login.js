import React from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChanges = event => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };
    
    login = e => {
        e.preventDefault();
        axiosWithAuth()
          .post('/api/login', this.state.credentials)
          .then(res => {
            window.localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected')
          })
          .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        placeholder="Username"
                        onChange={this.handleChanges}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        placeholder="Password"
                        onChange={this.handleChanges}
                    />
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;