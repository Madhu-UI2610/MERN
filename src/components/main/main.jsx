import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Header from '../header/header';
import Excel from '../excel/excel';
import Providers from '../provider/provider';
import Login from '../Login/login';
import Dummy from '../dummy/Dummy';
import Employeedetails from '../employeedetails/employeedetails';
import Signup from '../signup/signup';
import Pagenotfound from '../pagenotfound/pagenotfound';
 import Cart from '../cart/cart';
import Pagination from '../pagination/pagination';
import Chart from '../charts/charts';
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
                {/* <BrowserRouter> */}
                    <Switch>
                        <Route exact path="/" component={Dummy}></Route>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/Signup" component={Signup}></Route>
                        <Route exact path="/Excel" component={Excel}></Route>
                        <Route exact path="/Pagenotfound" component={Pagenotfound}></Route>
                        <Route exact path="/Dummy" component={Dummy}></Route>
                        <Route exact path="/Employeedetails" component={Employeedetails}></Route>
                        <Route exact path="/Cart" component={Cart}></Route>
                        <Route exact path="/Pagination" component={Pagination}></Route>
                        <Route exact path="/chart" component={Chart}></Route>
                    </Switch>
                {/* </BrowserRouter> */}
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