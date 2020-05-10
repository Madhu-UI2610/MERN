import React from 'react';
import './signup.css';
import axios from 'axios';
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmpwd: ""
        }

    }
    handleClick = () => {
        const data = {};
        const {username,email,password,confirmpwd} = this.state
        if (username!== "" && password !== "" && password === confirmpwd && email !== "") {
            data["username"] = username;
            data["password"] = password;
            data["email"] = email;
            axios.post("http://localhost:3001/users/user/signin", data).then((response) => {
                console.log("response", response)
            },
                (error) => {
                    console.log("error", error)
                })
        }
        else {
            window.alert("field should not be empty" )
        }
    }
    render() {
        return (
            <div className="signup-form">

                <div className="form-start">
                    <p>USER LOGIN</p>
                    <div className="email-pwd">

                        <label htmlFor="username">username</label>
                        <input type="text" id="username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                        <div className="sign-email">
                            <label htmlFor="email">email</label>
                            <input type="email" id="email" value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })} />
                        </div>
                    </div>
                    <div className="pwd-confpwd">
                        <label htmlFor="password">password</label>
                        <input type="text" id="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                        <div className="sign-email">
                            <label htmlFor="confpwd">confirm password</label>
                            <input type="text" id="confpwd" value={this.state.confirmpwd} onChange={(e) => this.setState({ confirmpwd: e.target.value })} />
                        </div>
                        <div>
                            <input className="butt-submit" type="button" value="Register" onClick={this.handleClick} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Signup;