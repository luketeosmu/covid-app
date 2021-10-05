import React from "react";
import { Table, Card, InputGroup, Form, Button, Container } from "react-bootstrap";
import "./EmployeeList.css";
import NavBar from "../../NavBar/NavBar";
import { useState } from 'react'

function EmployeeList() {
    const employees = [
        { id: 42069, name: "Otto", status: true },
        { id: 12345, name: "John", status: false },
        { id: 12089, name: "Mary", status: true },
        { id: 12459, name: "Steve", status: false },
    ]

    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div>
            <NavBar />
            <Card className="text-center">
                <Card.Header as="h2">Manage Employees</Card.Header>
                <div className="d-flex justify-content-center mt-5">
                    <h4> List of Employees </h4>
                </div>
                <Container className="mt-3">
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Search/Filter by Employee ID, Employee Name, Vaccinated/Unvaccinated..."
                            onChange = {(e) => {
                                setSearchTerm(e.target.value)
                            }}
                        />
                        <Button variant="outline-secondary" variant='success' id="button-addon2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </Button>
                    </InputGroup>
                </Container>
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
                            {employees
                            .filter((employee) => {
                                if(searchTerm === ""){
                                    return employee
                                } else if (employee.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return employee
                                } else if (employee.id.toString().includes(searchTerm.toString())){
                                    return employee
                                } else if (employee.status == true && (searchTerm.toLowerCase() == "yes" || searchTerm.toLowerCase() == "vaccinated")){
                                    return employee
                                } else if (employee.status == false && (searchTerm.toLowerCase() == "no" || searchTerm.toLowerCase() == "unvaccinated")) {
                                    return employee
                                }
                            })
                            .map(employee => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.status ? "Yes" : "No"}</td>
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
