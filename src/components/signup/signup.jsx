import React from 'react';
import './signup.css';
class Signup extends React.Component {
    render() {
        return (
            <div className="signup-form">

            <div className="form-start">
                <p>USER LOGIN</p>
                    <div className="email-pwd">

                    <label htmlFor="username">username</label>
                    <input type="text" id="username"/>
                        <div className="sign-email">
                            <label htmlFor="email">email</label>
                            <input type="email" id="email"/>
                        </div>
                    </div>
                            <div className="pwd-confpwd">
                                <label htmlFor="password">password</label>
                                <input type="text" id="password"/>
                                    <div className="sign-email">
                                        <label htmlFor="confpwd">confirm password</label>
                                        <input type="text" id="confpwd"/>
                                    </div>
                                        <button className="butt-submit">SUBMIT</button>
                            </div>
                             </div>
                             </div>

                            );
                        }
                    }
export default Signup;