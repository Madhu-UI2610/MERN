import React from 'react';
import './employeedetails.css';
class Employeedetails extends React.Component{
    render(){
        return(
     <div>
         <table className="table-emplyee-border">
         <tr>
             <th>Name</th>
             <td>Aurora</td>
        </tr>
        <tr>
             <th>Age</th>
             <td>53</td>
        </tr>
        <tr>
             <th>Email</th>
             <td>ante.blandit@disparturient.ca</td>
        </tr>
        <tr>
             <th>Date of joining</th>
             <td>10/06/2019</td>
        </tr>
        <tr>
             <th>Phone number</th>
             <td>1628101902299</td>
        </tr>
        <tr>
             <th>Street</th>
             <td>493 Iaculis Rd.</td>
        </tr>
        <tr>
             <th>City</th>
             <td>Lewiston</td>
        </tr>
        <tr>
             <th>Zip</th>
             <td>42591-180</td>
        </tr>
        <tr>
             <th>Region</th>
             <td>Maine</td>
        </tr>
        <tr>
             <th>Country</th>
             <td>Sudan</td>
        </tr>
        <tr>
             <th>Info</th>
             <td>est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia</td>
        </tr>
        <tr>
             <th>EmployeeID</th>
             <td>101</td>
        </tr>
        </table>


     </div>
    )
        }
}
export default Employeedetails;