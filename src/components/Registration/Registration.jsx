import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Registration.css";
//import Header from "../Header/HeaderLogout";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
        <div className="Register">
        <h2 className="d-flex justify-content-center mt-4">Let's start by entering some details...</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">Business Name</Label>
                    <Input type="text" name="username" id="username" placeholder="Enter your username" />
                </FormGroup>

                <FormGroup className="mt-4">
                    <Label for="description">Business Details</Label>
                    <Input type="text" name="text" id="description" placeholder="Please enter some details about your business" />
                </FormGroup>

                <FormGroup className="mt-4">
                    <Label for="phone">Phone Number</Label>
                    <Input type="number" name="phone" id="phone" placeholder="Enter your phone number" />
                </FormGroup>

                <FormGroup className="mt-4">
                    <Label for="address">Address</Label>
                    <Input type="text" name="address" id="address" placeholder="Enter your address" />
                </FormGroup>


                <FormGroup className="mt-4">
                    <Label for="option">Who are you?</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>User</option>
                        <option>Business</option>
                    </Input>
                </FormGroup>

                <FormGroup className="mt-4">
                    <Label for="option">Category of attraction</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Outdoor (big)</option>
                        <option>Outdoor (small)</option>
                        <option>Indoor (big)</option>
                        <option>Indoor (small)</option>
                        <option>small (big)</option>
                        <option>big (big)</option>
                        <option>NA</option>
                    </Input>
                </FormGroup>

                <FormGroup className="mt-4">
                    <Label for="email">Enter email</Label>
                    <Input type="email" name="email" id="email" placeholder="Please enter your email" />
                </FormGroup>

                <FormGroup className="mt-4">
                    <Label for="email">Phone Number</Label>
                    <Input type="number" name="phone" id="phone" placeholder="Enter your phone number" />
                </FormGroup>

                <FormGroup className="mt-4">
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Please choose a password" />
                </FormGroup>

                <FormGroup className="mt-4">
                    <Label for="cfmPassword">Confirm Password</Label>
                    <Input type="password" name="cfmPassword" id="cfmPassword" placeholder="Enter your password again" />
                </FormGroup>

                <FormGroup className="mt-4">
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Register
                    </Button>
                </FormGroup>

            </Form>
        </div>
        </>
    );
}
export default Register;