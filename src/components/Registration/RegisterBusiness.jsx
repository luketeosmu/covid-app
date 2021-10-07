import React from 'react'
import NavBar from '../NavBar/NavBar'

const RegisterBusiness = () => {
    
    return (
        <div>
            <NavBar />
            <Container>
                <Card className="p-5">
                    <h2 className="d-flex justify-content-center mb-4">Start by entering their ...</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email..." />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name..." />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your last name..." />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridPass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password... (min. 8 characters)" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridConfirmPass">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password... (min. 8 characters)" />
                        </Form.Group>

                        <Button href="businesscategory" className="mt-4 float-end" variant="success" type="submit">
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

export default RegisterBusiness
