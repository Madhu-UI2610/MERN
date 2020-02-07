import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from '../header/header';
import Excel from '../excel/excel';
import Providers from '../provider/provider';
import Login from '../Login/login';
import Dummy from '../dummy/Dummy';
import Employeedetails from '../employeedetails/employeedetails';
import Signup from '../signup/signup';
import Pagenotfound from '../pagenotfound/pagenotfound';
class Main extends React.Component {
    render() {
        return (
            <Providers>
                {/* <Login></Login>
                <Signup></Signup>
                <Excel></Excel>
                <Pagenotfound></Pagenotfound>
                <Dummy></Dummy>
                <Employeedetails></Employeedetails> */}
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/Signup" component={Signup}></Route>
                        <Route path="/Excel" component={Excel}></Route>
                        <Route path="/Pagenotfound" component={Pagenotfound}></Route>
                        <Route path="/Dummy" component={Dummy}></Route>
                        <Route path="/Employeedetails" component={Employeedetails}></Route>
                    </Switch>
                </BrowserRouter>
            </Providers>
        )
    }

}
export default Main;

// Cart
// chart
// Dummy
// enployeeDetail
// Loginsignup
// Excel
// pagenotfound