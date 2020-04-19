import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';



class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/Signup">Signup</a>
                    </li>
                    <li>
                        <a href="/Pagenotfound">Pagenotfound</a>
                    </li>
                    <li>
                        <a href="/Excel">Excel</a>
                    </li>
                    <li>
                        <a href="/Employeedetails">Employeedetails</a>
                    </li>
                    <li>
                        {/* <a href = "/Cart">Cart</a> */}
                        <Link to={'/Cart'}>Cart</Link>
                    </li>
                </ul>
            </nav>


        )
    }
}
export default Header;

    /* <div class="header-top">
<a href="https://www.npmjs.com/package/xlsx">Click me</a>
</div>
<div>
   
   

    <Login></Login>
    <Signup></Signup>
    <Pagenotfound></Pagenotfound>

</div> */
