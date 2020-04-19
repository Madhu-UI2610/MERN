import React from 'react';
import './login.css';


class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            show : false
        }
    }
    componentDidMount(){
        
        console.log("aaaaa")
    }
    componentWillMount(){
       
        console.log("bbbb")
    }
    
    
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