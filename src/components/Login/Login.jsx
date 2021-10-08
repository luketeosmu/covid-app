import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { useHistory } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AuthenticationService from "../../services/AuthenticationService"
import UserService from "../../services/UserService"

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const login = (e) => {
        e.preventDefault();
        let user = {
            email: email,
            password: password,
        };

        AuthenticationService.authenticate(user)
            .then((res) => {
                history.push({
                    pathname: "/",
                });
            });
    };

    return (
        <div className="loginPage">
            <NavBar />
            <div className="Login">
                <h1 className="d-flex justify-content-center mt-4">Welcome to COVID</h1>
                <Form>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label className="d-flex justify-content-center mt-4">Email</Form.Label>
                        <Form.Control
                            autoFocus
                            required
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group size="lg" controlId="password">
                        <Form.Label className="d-flex justify-content-center mt-4">Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-center mt-4">
                        <Button block size="lg" type="submit" onClick={login}>
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
            <Footer />
        </div>
    );
}