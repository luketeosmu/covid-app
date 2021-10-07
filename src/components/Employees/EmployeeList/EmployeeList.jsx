import React from "react";
import { Table, Card, InputGroup, Form, Button, Container, Tooltip, OverlayTrigger, Modal, Row, Col } from "react-bootstrap";
import "./EmployeeList.css";
import NavBar from "../../NavBar/NavBar";
import { useState } from 'react'

const EmployeeList = () => {
    const employees = [
        { id: 12, name: "Otto", status: true },
        { id: 34, name: "John", status: false },
        { id: 45, name: "Mary", status: true },
        { id: 56, name: "Steve", status: false },
        { id: 78, name: "Kang", status: false },
        { id: 90, name: "Roys", status: false },
        { id: 321, name: "Jian Yi", status: true },
        { id: 324, name: "Yash", status: false },
        { id: 656, name: "Luke", status: true },
        { id: 767, name: "Shaun", status: true },
        { id: 986, name: "Sean", status: true },
        { id: 4213, name: "Josh", status: true },
        { id: 5739, name: "Rahmat", status: true },
        { id: 7683, name: "Otto", status: false },
        { id: 9778, name: "Jennifer", status: true },
        { id: 12487, name: "William", status: true },
    ]

    const [employeeId, setEmployeeId] = useState(0)
    const [employeeName, setEmployeeName] = useState("")
    const [employeeStatus, setEmployeeStatus] = useState(false)
    const [employeeFET, setEmployeeFET] = useState("")
    function validateForm() {
        return employeeId !== 0 && employeeName.length > 0
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    const [searchTerm, setSearchTerm] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderTooltip = (props) => (
        <Tooltip className="me-2" id="button-tooltip" {...props}>
            Add New Employee
        </Tooltip>
    );

    return (
        <div>
            <NavBar />
            <Card className="text-center pb-5">
                <Card.Header as="h2">Manage Employees</Card.Header>
                {/* <div className="d-flex justify-content-center mt-5">
                    <h4> List of Employees </h4>
                </div> */}
                <Container className="mt-5">
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Try searching by Employee ID, Employee Name, Vaccinated/Unvaccinated..."
                            onChange={(e) => {
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
                <div className="Table mb-5">
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
                                    if (searchTerm === "") {
                                        return employee
                                    } else if (employee.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return employee
                                    } else if (employee.id.toString().includes(searchTerm.toString())) {
                                        return employee
                                    } else if (employee.status == true && (searchTerm.toLowerCase() == "yes" || searchTerm.toLowerCase() == "vaccinated")) {
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
                <Container className="mb-5 fixed-bottom text-end">
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 100, hide: 150 }}
                        overlay={renderTooltip}
                    >
                        <Button style={{
                            width: "60px",
                            height: "60px",
                            padding: "10px 16px",
                            borderRadius: "35px",
                            fontSize: "12px",
                            textAlign: "center"
                        }}
                            onClick={handleShow}
                            className="mt-5"
                            variant="primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                            </svg>
                        </Button>
                    </OverlayTrigger>
                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header>
                            <Modal.Title className="ms-4">Add New Employee</Modal.Title>
                            {/* <CloseButton /> doesnt work */}
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="ms-4 me-4" onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Employee ID</Form.Label>
                                    <Form.Control type="number" placeholder="e.g. 012345" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label>Employee Name</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. John Smith" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                    <Form.Label>Vaccination Status</Form.Label>
                                    <Form.Check type="radio" label="Vaccinated" name="vacRadio" id="vac" required />
                                    <Form.Check type="radio" label="Unvaccinated" name="vacRadio" id="unvac" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label>Upcoming FET Testing Date</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer className="me-4">
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="success" onClick={handleClose} disabled={!validateForm()}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </Card>
        </div>
    );
}
export default EmployeeList;
