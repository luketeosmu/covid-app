import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export const ForgotPasswordForm = () => {
    return (

        <Container className="mt-5">
            <h1 className="d-flex justify-content-center mb-4" style={{fontSize:'25px'}}>Forgot Password? :(</h1>
            <Form>

                <Form.Group controlId="formBasicEmail" style={{width:"500px", margin:'auto'}}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mt-3" style={{width:"500px", margin:'auto'}}>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="phone" placeholder="Enter phone number" />
                    <div className="mt-4 mb-1" style={{textAlign:'center'}}>
                        <Form.Text className="text-muted">
                            We'll never share your personal details with anyone else.
                        </Form.Text>
                    </div>
                </Form.Group>

                <Button variant="primary" type="submit" style={{margin:'auto',display:'block', padding: '5px 20px'}}>
                    Submit
                </Button>
                
            </Form>
        </Container>
    )
}

export default ForgotPasswordForm
