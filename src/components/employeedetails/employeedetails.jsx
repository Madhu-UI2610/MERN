import React from 'react';
import './employeedetails.css';
import axios from 'axios';
class Employeedetails extends React.Component {
     state = {
          isDataLoaded: false
     }
     constructor(props) {
          super(props);
          axios.get('http://localhost:3001/contractor/5e899c8f8075b814b044bc63').then(
               (data) => {
                    console.log(data);
                    this.employee = data.data.data;
                    this.setState({ isDataLoaded: true });
               }
          )
     }
     employee = {};
     employeelist = () => {
          alert("data")

     }

     loadData() {
          if (this.state.isDataLoaded) {
               return (
                    <table className="table-emplyee-border">
                         <tbody>
                              <tr>
                                   <td>Name</td>
                                   <td>{this.employee.Name}</td>
                              </tr>
                              <tr>
                                   <td>Age</td>
                                   <td>{this.employee.Age}</td>
                              </tr>
                              <tr>
                                   <td>Email</td>
                                   <td>{this.employee.Email}</td>
                              </tr>
                              <tr>
                                   <td>Date of joining</td>
                                   <td>{this.employee["Date of joining"]}</td>
                              </tr>
                              <tr>
                                   <td>Phone number</td>
                                   <td>{this.employee["Phone number"]}</td>
                              </tr>
                              <tr>
                                   <td>Street</td>
                                   <td>{this.employee.Street}</td>
                              </tr>
                              <tr>
                                   <td>City</td>
                                   <td>{this.employee.City}</td>
                              </tr>
                              <tr>
                                   <td>Zip</td>
                                   <td>{this.employee.Zip}</td>
                              </tr>
                              <tr>
                                   <td>Region</td>
                                   <td>{this.employee.Region}</td>
                              </tr>
                              <tr>
                                   <td>Country</td>
                                   <td>{this.employee.Country}</td>
                              </tr>
                              <tr>
                                   <td>Info</td>
                                   <td>{this.employee.Info}</td>
                              </tr>
                              <tr>
                                   <td>EmployeeID</td>
                                   <td>{this.employee.EmployeeID}</td>
                              </tr>
                         </tbody>
                    </table>
               );
          } else {
               return <p style={{ textAlign: "center",marginTop: '100px' }}>Loading ..</p>
          }
     }

     render() {
          // alert('render called click ok to proceed');
          const employeDetails = this.props.data;
          console.log("999", employeDetails);
          let tableData = this.loadData();
          return (
               <React.Fragment>
                    <div className="table_details">
                         <div className="personimage">
                              <img src="cart design.jpg" alt="profile" />
                              <p>
                                   <button className="button-back" onClick={this.employeelist}>Back</button>
                              </p>

                         </div>
                         <div className="brder">
                              {tableData}
                         </div>
                    </div>
               </React.Fragment>




          )
     }
}
export default Employeedetails;