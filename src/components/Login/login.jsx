import React from 'react';
import './login.css';
import axios from 'axios';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            username: "",
            password: ""
        }
    }
    handleLogin = () => {
        const data = {}
        const { username, password } = this.state
        data["username"] = username;
        data["password"] = password;
        axios.post("http://localhost:3001/users/user/checkvaliduser", data).then((response) => {
            const statusText = response.data.data
            if (statusText === "200") {
                alert("success")
            }
            if (statusText === "401") {
                alert("Incorrect email or password")
            }
            else if (statusText === "500") {
                alert("Internal error please try again")
            }
        },
            (error) => {
                
            }

        )
    }


    render() {
        return (
            <div id="loginPage">
                <div className="form-group">
                    <label htmlFor="Username">Username</label>
                    <input type="text" name="Username" onChange={(e) => this.setState({ username: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                <div className="form-group">
                    <button onClick={this.handleLogin}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;