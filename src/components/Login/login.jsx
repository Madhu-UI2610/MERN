import React from 'react';
import './login.css';

class Login extends React.Component {
    render() {
        return (
            <div id="loginPage">
                <div className="form-group">
                    <label htmlFor="Username">Username</label>
                    <input type="text" name="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="Password" />
                </div>
                <div className="form-group">
                    <button>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;