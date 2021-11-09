import { Container, Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AuthenticationService from '../../services/AuthenticationService';


const UserInformation = () => {
    useEffect(() => {
        setFirstName(AuthenticationService.getCurrentUser().firstName);
        setLastName(AuthenticationService.getCurrentUser().lastName);
        setEmail(AuthenticationService.getCurrentUser().username);
        setPassword(AuthenticationService.getCurrentUser().password)
        setFetConfig(AuthenticationService.getCurrentUser().fetConfig);
    })
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fetConfig, setFetConfig] = useState(0)

    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")
    const [newEmail, setNewEmail] = useState("")

    const [showForm, setForm] = useState(false)
    const [showAlert, setAlert] = useState(false)

    const handleShowForm = () => {
        setForm(true);
    }

    const handleCloseForm = () => {
        setForm(false);
    }

    const [showFirstNameForm, setFirstNameForm] = useState(false)

    const handleShowFirstNameForm = () => {
        setFirstNameForm(true);
    }

    const handleCloseFirstNameForm = () => {
        setFirstNameForm(false);
    }

    const updateFirstName = () => {
        let newUser = {
            username: "dummy@gmail.com",
            password: password,
            firstName: newFirstName,
            lastName: lastName,
            fetConfig: fetConfig,
            authorities: "ROLE_USER"
        }

        AuthenticationService.updateUser(newUser)
            .then((res) => {
                handleCloseFirstNameForm();
            })
    }

    const [showLastNameForm, setLastNameForm] = useState(false)

    const handleShowLastNameForm = () => {
        setLastNameForm(true);
    }

    const handleCloseLastNameForm = () => {
        setLastNameForm(false);
    }

    const updateLastName = () => {
        let newUser = {
            username: "dummy@gmail.com",
            password: password,
            firstName: firstName,
            lastName: newLastName,
            fetConfig: fetConfig,
            authorities: ""
        }

        AuthenticationService.updateUser(newUser)
            .then((res) => {
                handleCloseLastNameForm();
            })
    }

    const [showEmailForm, setEmailForm] = useState(false)

    const handleShowEmailForm = () => {
        setEmailForm(true);
    }

    const handleCloseEmailForm = () => {
        setEmailForm(false);
    }

    const updateEmail = () => {
        let newUser = {
            username: newEmail,
            password: password,
            firstName: firstName,
            lastName: lastName,
            fetConfig: fetConfig,
            authorities: ""
        }

        AuthenticationService.updateUser(newUser)
            .then((res) => {
                console.log(res);
                handleCloseEmailForm();
            })
    }

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const updatePassword = () => {
        let newUser = {
            username: "dummy@gmail.com",
            password: newPassword,
            firstName: firstName,
            lastName: lastName,
            fetConfig: fetConfig,
            authorities: ""
        }

        AuthenticationService.updateUserPassword(newUser, oldPassword)
            .then ((res) => {
                console.log(res);
                handleCloseForm();
            })
    }

    const handleVerifyNewPassword = () => {
        if(newPassword === confirmNewPassword) {
            updatePassword();
        } else {
            handleShowAlert();
            console.log("Make sure you enter the correct new passwords");
        }
    }

    const handleShowAlert = () => {
        setAlert(true);
    }

    const handleNotShowAlert = () => {
        setAlert(false);
    }


    return ( 
        <div style={{ height: "70vh" }} className="p-0">
            <div>
                <h1 style={{ fontSize: "20px", fontWeight: "500" }} className="ms-5 m-4 text-center">Update User Details</h1>
                <hr />
            </div>
            <Container>
                <ul style={{fontSize : "18px", listStyle: "none"}}>
                    <li className="mt-4 mb-3"> 
                        <p><strong>First Name: </strong>{firstName}</p>
                            <button className="p-2"style={{border: "none"}} onClick={handleShowFirstNameForm}>Edit First Name <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg></button>
                    </li>
                    <li className="mb-3"> 
                        <p><strong>Last Name: </strong>{lastName}</p>
                        <button className="p-2" style={{ border: "none" }} onClick={handleShowLastNameForm}>Edit Last Name <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg></button>
                    </li>
                    <li className="mb-3"> 
                        <p><strong>Email: </strong>{email}</p>
                        <button className="p-2" style={{ border: "none" }} onClick={handleShowEmailForm}>Edit Email <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg></button>
                    </li>
                    <li>
                        <button className="p-2 mt-4" style={{ border: "none" }} onClick={handleShowForm}>
                            Change Password <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </Container>
            <Container>
                <Modal show={showForm} onHide={() => handleCloseForm()} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title>Update Password</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Old Password (for verification)</Form.Label>
                                <Form.Control 
                                    type="password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm New Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    value={confirmNewPassword}
                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer className="d-flex justify-content-center">
                        <Button className="ps-4 pe-4" variant="secondary" onClick={handleCloseForm}>Cancel</Button>
                        <Button className="ps-4 pe-4" variant="success" onClick={handleVerifyNewPassword}>Save</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showFirstNameForm} onHide={handleCloseFirstNameForm} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title>Update First Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>New First Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="John"
                                    value={newFirstName}
                                    onChange={(e) => setNewFirstName(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <Button className="ps-4 pe-4" variant="secondary" onClick={handleCloseFirstNameForm}>Cancel</Button>
                        <Button className="ps-4 pe-4" variant="success" onClick={updateFirstName}>Save</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showLastNameForm} onHide={handleCloseLastNameForm} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title>Update Last Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>New Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Smith"
                                    value={newLastName}
                                    onChange={(e) => setNewLastName(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <Button className="ps-4 pe-4" variant="secondary" onClick={handleCloseLastNameForm}>Cancel</Button>
                        <Button className="ps-4 pe-4" variant="success" onClick={updateLastName}>Save</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showEmailForm} onHide={handleCloseEmailForm} centered>
                    <Modal.Header className="justify-content-center">
                        <Modal.Title>Update Email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>New Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="johnsmith@gmail.com"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <Button className="ps-4 pe-4" variant="secondary" onClick={handleCloseEmailForm}>Cancel</Button>
                        <Button className="ps-4 pe-4" variant="success" onClick={updateEmail}>Save</Button>
                    </Modal.Footer>
                </Modal>



                <Modal show={showAlert} onHide={handleNotShowAlert} centered style={{height:"25%"}}>
                    <div class="alert alert-danger" role="alert" style={{marginBottom:"0px"}}>
                        <h5 style={{fontSize:"15px", fontFamily:"sans-serif", marginBottom:"mb-5"}}>Warning: Your New Passwords do not match. Please try again.</h5>
                        <Button className="ps-4 pe-4" variant="success" onClick={handleNotShowAlert}>Ok</Button>
                    </div>
                </Modal>
            </Container>



        </div>
    );
}
 
export default UserInformation;