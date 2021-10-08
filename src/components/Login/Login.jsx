import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { useHistory } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import {Container, Row, Col} from 'react-bootstrap'


export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (email == "borrower@email.com") {
            //insert event
        } else {
            //insert event
        }
    }

    return (
        <div className="loginPage">
            <NavBar />
            
            <Container className="LoginPage mt-5">
                <h1 className="d-flex justify-content-center mb-4" style={{fontSize:'25px'}}>Welcome to&nbsp;<span style={{color:'green'}}>COVID-TRACK</span>!</h1>
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="email" style={{width:"500px", margin:'auto'}}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlID="password" className="mt-3" style={{width:"500px", margin:'auto'}}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="Enter password"/>
                        <div className="mt-4 mb-1" style={{textAlign:'center'}}>
                            <Form.Text className="text-muted">
                                We'll never share your personal details with anyone else.
                            </Form.Text>
                        </div>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{margin:'auto',display:'block', padding: '5px 20px'}}>
                        Login
                    </Button>
                    
                </Form>
            </Container>

            <div style={{position: "fixed", bottom:"0px"}}>
                <Footer/>
            </div>
        </div>
    );
}
//export default Login;