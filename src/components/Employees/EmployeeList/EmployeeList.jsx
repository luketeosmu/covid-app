import React from "react";
import { Table, Card } from "react-bootstrap";
import "./EmployeeList.css";
import NavBar from "../../NavBar/NavBar";

function EmployeeList() {
    const employees = [
        { id: 42069, name: "Otto", status: true },
        { id: 12345, name: "John", status: false },
        { id: 12089, name: "Mary", status: true },
        { id: 12459, name: "Steve", status: false },
    ]
    return (
        <div>
            <NavBar />
            <Card className="text-center">
                <Card.Header as="h2">Manage Employees</Card.Header>
                <div className="d-flex justify-content-center mt-5">
                    <h4> List of Employees </h4>
                </div>
                <div className="Table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>Vaccinated?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.status ? "Yes":"No"}</td>
                                </tr>
                            ))}
                            {/* <tr>
                                <td>69420</td>
                                <td>Otto</td>
                                <td>Vaccinated</td>
                            </tr> */}
                        </tbody>
                    </Table>
                </div>
            </Card>
        </div>
    );
}
export default EmployeeList;
