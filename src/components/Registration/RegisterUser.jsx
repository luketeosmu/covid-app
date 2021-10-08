import { useState } from 'react'
import { useHistory } from 'react-router'
import NavBar from '../NavBar/NavBar'
import { Card, Container, Row, Form, Col, Button } from 'react-bootstrap'
import AuthenticationService from '../../services/AuthenticationService'

const RegisterUser = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    const register = (e) => {
        e.preventDefault();
        let user = {
            username: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            authorities: "ROLE_USER"
        };

        AuthenticationService.registerUser(user)
            .then((res) => {
                history.push({
                    pathname: "/businesscategory",
                });
            });
    };

    //email, firstname, lastname, password
    return (
        <div>
            <NavBar />
            <Container>
                <Card className="p-5">
                    <h2 className="d-flex justify-content-center mb-4">Let's set up your user account...</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email..." />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control required value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter your first name..." />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control required value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter your last name..." />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridPass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password... (min. 8 characters)" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridConfirmPass">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control required type="password" placeholder="Enter your password... (min. 8 characters)" />
                        </Form.Group>

                        <Button onClick={register} className="mt-4 float-end" variant="success" type="submit">
                            Next <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    )
}

export default RegisterUser
