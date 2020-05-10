import React from 'react';
//import Employeedetails from "../employeedetails/employeedetails"
import './cart.css';
import axios from 'axios';
import Search from "../search/search"
class Cart extends React.Component {


     employeeArray = [];
    originalEmployeeArray = [];
    constructor(props) {
        super(props);
        this.state = {
            isdataloaded: false,
            searchterm: ''
        }

        this.originalEmployeeArray = this.employeeArray.slice();
        axios.get('http://localhost:3001/contractor/contractor').then(
            (data) => {
                console.log("mmm", data);
                this.employeeArray = data.data.data;
                // this.employeeArray = empArray.map(each =>{
                //     let eachEmployee = {
                //         Name : each.employeename,
                //         EmployeeID : each.employeeID,
                //         _id : each._id
                //     }
                //     return eachEmployee;
                // })
                this.originalEmployeeArray = this.employeeArray.slice();
                this.setState({
                    isdataloaded: true
                })

            }
        )
        this.generateDisplayData = this.generateDisplayData.bind(this);
    }

    generateDisplayData() {
        let displayData = [];
        // if (this.employeeArray.length > 0) {
        //     this.employeeArray.map((item, index) => {

        //         let data = <div key={index} className="Employeecart"><img src="cart design.jpg" alt="profile" /><p>Name: {item.Name}</p><p>id:{item.EmployeeID}</p><button onClick={() => this.viewData(item)}>view</button></div>
        //         displayData.push(data);

        //     })
        //     return displayData;
        // }

        displayData = this.employeeArray.map((item, index) => {

            let data = <div key={index} className="Employeecart"><img src="cart design.jpg" alt="profile" /><p>Name: {item.Name}</p><p>id:{item.EmployeeID}</p><button onClick={() => this.viewData(item)}>view</button></div>
            return data
        })
        return displayData;

    }


    viewData = (data) => {
        axios.get('http://localhost:3001/contractor/:id').then(
            (data)=>{
                 console.log(data);
            }
       )
        console.log(data)
        // const employData = data;
        // <Employeedetails data ={employData} />
        // console.log("ppp",data)
    }
    search = (e) => {
        console.log("hhhh", e.target.value)
        console.log("hhhh", this.state.searchterm)
        //this.employeeArray = this.employeeArray.slice(1,3);
        let searchterm = new RegExp(e.target.value, 'i');
        this.employeeArray = this.originalEmployeeArray.filter(each => {
            return searchterm.test(each.Name);
        })
        this.setState({
            searchterm: e.target.value
        })
    }
    render() {
        // let displayData = (
        //     <React.Fragment>
        //         <p>Loading</p>
        //     </React.Fragment>
        // )
        // console.log(this.employeeArray);
        // if (this.employeeArray.length > 0) {
        //     displayData = (
        //         <React.Fragment>
        //             <div className="Employeecart">
        //                 <img src="cart design.jpg"></img>
        //                 <p>Name: Madhu</p>
        //                 <p>id: 12</p>
        //                 <button>view</button>
        //             </div>

        //             <div className="Employeecart">
        //                 <img src="cart design.jpg"></img>
        //                 <p>Name: Madhu</p>
        //                 <p>id: 12</p>
        //                 <button>view</button>
        //             </div>
        //             {this.generateDisplayData()}
        //         </React.Fragment>

        //     );
        // }

        return (
            <div className="cart">
                {/* {displayData} */}
                <Search searchFn={this.search} value={this.state.searchterm}></Search>
                {this.generateDisplayData()}

            </div>
        )
    }
}
export default Cart;