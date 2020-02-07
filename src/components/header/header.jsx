import React from 'react';
import './header.css'

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <ul  className="nav navbar-nav">
                        <li>
                            <a href="/">Login</a>
                        </li>
                        <li>
                            <a href="/">Signup</a>
                        </li>
                        <li>
                            <a href="/">PageNot found</a>
                        </li>
                        <li>
                            <a href="/">Excel</a>
                        </li>
                    </ul>
                </nav>

            </div>
        )
    }
}
export default Header;


{/* <div class="header-top">
<a href="https://www.npmjs.com/package/xlsx">Click me</a>
</div>
<div>
   
   

    <Login></Login>
    <Signup></Signup>
    <Pagenotfound></Pagenotfound>

</div> */}