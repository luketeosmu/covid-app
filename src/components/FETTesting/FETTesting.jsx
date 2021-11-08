import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Container, Card, Button, Modal, Form} from 'react-bootstrap'
import Footer from "../Footer/Footer";
import { useState, useEffect } from 'react';
import EmployeeService from '../../services/EmployeeService';
import AuthenticationService from '../../services/AuthenticationService';


const FETTesting = () => {
    //get backend to return us list of employees testing on today's date
    //two update scenarios -> upon clicking checkmark: + 7 days to date
    // -> if employee is not checked at the end of the day: + 1 day to date

    const [employees, setEmployees] = useState([]);
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        EmployeeService.getEmployees().then(() => {
            setEmployees(JSON.parse(localStorage.getItem("employees")))
        })
    })

    useEffect(() => {
        for (var i = 0; i < employees.length; i++) {
            var tempEmployee = employees[i];
            if (new Date() > new Date(tempEmployee.fetDate)) {
                let updatedEmployee = {
                    id: tempEmployee.id,
                    name: tempEmployee.name,
                    vaxStatus: tempEmployee.vaxStatus,
                    fetDate: new Date().toISOString().split('T')[0]
                }
                EmployeeService.updateEmployee(updatedEmployee);
            }
        }
    },[])

    const [show, setShow] = useState(false);
    const[employee, setEmployee] = useState(null);
    const[nextFETDate, setNextFETDate] = useState(AuthenticationService.getCurrentUser().fetConfig);

    const [showFETChange, setShowFETChange] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
    }

    const handleCloseFETDate = () => {
        setShowFETChange(false);
    }

    const handleFETDate = () => {
        setShowFETChange(true);
    }

    const handleSaveFETDate = () => {
        let newUser = {
            username: "dummy@gmail.com",
            password: AuthenticationService.getCurrentUser().password,
            firstName: AuthenticationService.getCurrentUser().firstName,
            lastName: AuthenticationService.getCurrentUser().lastName,
            authorities: "",
            fetConfig: nextFETDate
        }

        AuthenticationService.updateUser(newUser).then((res) => {
            handleCloseFETDate();
        })
    }

    const handleClose = () => {
        setShow(false);
        setEmployee(null);
    }
    const handleShow = (employee) => {
        setShow(true);
        setEmployee(employee);
    }

    const handleTested = () => {
        let testDate = new Date(employee.fetDate);
        if(testDate.getDate() == new Date().getDate()){
            testDate.setDate(testDate.getDate() + AuthenticationService.getCurrentUser().fetConfig);
            let newEmployee = {
                id: employee.id,
                name: employee.name,
                vaxStatus: employee.vaxStatus,
                fetDate: testDate.toISOString().split('T')[0]
            }
            EmployeeService.updateEmployee(newEmployee).then((res) => {
                handleClose();
            })
        // } else {
        //     // testDate.setDate(today.getDate());
        //     let newOldEmployee = {
        //         id: employee.id,
        //         name: employee.name,
        //         vaxStatus: employee.vaxStatus,
        //         fetDate: today.toISOString().split('T')[0]
        //     }
        //     EmployeeService.updateEmployee(newOldEmployee).then(setTested(false))
        }
    }
    return (
        <div className="fettesing">
            <NavBar />
            <Card className="text-center pb-5">
                <Card.Header as="h2">
                    FET Testing
                </Card.Header>
                <Container className="mt-5 mb-5">
                    <div className = "mb-4">
                        <div className = "float-end">
                            <button onClick={handleFETDate} style={{ border: "none", backgroundColor: "transparent"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                </svg>
                            </button>
                        </div>
                        <h6>Today: {new Date().toDateString()}</h6>
                    </div>
                    {employees
                    .filter((employee) => {
                        if(new Date(employee.fetDate).toDateString() == new Date().toDateString()){
                            return employee;
                        }
                    })
                    .map((employee) =>
                        <Card className="pe-4 ps-4 pt-2 pb-1">
                            <Card.Body className="text-start">
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>
                                    <big>{employee.name}</big>&nbsp;&nbsp;
                                    <span style={{
                                        backgroundColor: "#ddd",
                                        border: "none",
                                        color: "black",
                                        padding: "10px 20px",
                                        textAlign: "center",
                                        textDecoration: "none",
                                        display: "inline-block",
                                        margin: "4px 2px",
                                        borderRadius: "16px"
                                    }}>
                                        {employee.status ? "Vaccinated" : "Unvaccinated"}
                                    </span>
                                </div>
                                    <div >
                                        <Button style={{ borderRadius: "50%" , width: "50px", height: "50px"}} variant="success" onClick={() => handleShow(employee)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                        </svg></Button>
                                    </div>
                                </div>
                                <p style={{ fontSize: "11px" }}>(Last Tested: {employee.fetDate})
                                </p>
                            </Card.Body>
                        </Card>
                    )}
                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header className="justify-content-center">
                            <Modal.Title>Warning</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p className="text-center pt-3">Are you sure you wish to mark this employee as <strong>Tested?</strong></p>
                            <p className="text-center pt-3">(This sets the next FET date - you can change this in Settings)</p>
                        </Modal.Body>

                        <Modal.Footer className="d-flex justify-content-center">
                            <Button onClick={handleClose} className="ps-4 pe-4" variant="danger">No</Button>
                            <Button onClick={handleTested} className="ps-4 pe-4" variant="success">Yes</Button>
                        </Modal.Footer>
                    </Modal>




                    <Modal show={showFETChange} onHide={handleCloseFETDate} centered>
                        <Modal.Header className="justify-content-center" closeButton>
                            <Modal.Title>Set Employee FET Date</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form className="ms-4 me-4" onSubmit={handleSubmit}>
                                <Form.Group
                                className="mb-3"
                                >
                                <Form.Label>Next FET Date (in X days)</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="e.g. 012345"
                                    value={nextFETDate}
                                    onChange={(e) => setNextFETDate(e.target.value)}
                                    required
                                />
                                </Form.Group>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer className="d-flex justify-content-center">
                            <Button onClick={handleCloseFETDate} className="ps-4 pe-4" variant="secondary">Cancel</Button>
                            <Button onClick={handleSaveFETDate} className="ps-4 pe-4" variant="success">Save</Button>
                        </Modal.Footer>
                    </Modal>




                </Container>
            </Card>
            <Footer />
        </div>
    )
}

export default FETTesting
