import React from 'react';
import Table from 'react-bootstrap/Table';
import "./EmployeeList.css";

function EmployeeList(){
    return(
    <div>
    <div className = "d-flex justify-content-center mt-4">
        <h2> List of Employees </h2>
    </div>
    <div className = "Table">
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Vaccination Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>69420</td>
            <td>Otto</td>
            <td>Vaccinated</td>
            </tr>
            <tr>
            <td>2</td>
            <td>12098</td>
            <td>Thornton</td>
            <td>Unvaccinated</td>
            </tr>
            <tr>
            <td>3</td>
            <td>12345</td>
            <td> James </td> 
            <td>Anti-Vax</td>
            </tr>
        </tbody>
        </Table>
        </div>
        </div>
    );
}
export default EmployeeList;
