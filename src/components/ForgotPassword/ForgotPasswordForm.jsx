import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export const ForgotPasswordForm = () => {
    return (

        <Container className="mt-5">
            <h1 className="d-flex justify-content-center mt-4">Forgot Password? :(</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="phone" placeholder="Enter phone number" />
                    <div className="mt-4 mb-1">
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default ForgotPasswordForm
