import { React, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Form, Col, Row, Button, Container, Card } from "react-bootstrap";
import { useHistory } from 'react-router'
import AuthenticationService from "../../services/AuthenticationService";

const RegisterBusiness = () => {
    const history = useHistory();
    const [businessName, setBusinessName] = useState("")
    const [outdoorIndoor, setOutdoorIndoor] = useState("i")
    const [category, setCategory] = useState("Theme Park")
    const [capacity, setCapacity] = useState(0)

    const registerBusiness = (e) => {
        e.preventDefault();
        let business = {
            businessName: businessName,
            category: category,
            outdoorIndoor: outdoorIndoor,
            capacity: capacity
        };
        AuthenticationService.registerBusiness(business)
            .then((res) => {
                history.push({
                    pathname: "/login",
                });
            });
    };

    const handleCategory = (e) => {
        setOutdoorIndoor( e.target.value );
    }

    return (
        <div>
            <NavBar />
            <Container>
                <Card className="p-5">
                    <h2 className="d-flex justify-content-center mb-4">
                        Let's add a few more details...
                    </h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>What is the name of your business?</Form.Label>
                            <Form.Control required value={businessName} onChange={(e) => setBusinessName(e.target.value)} type="text" placeholder="Enter business name..." />
                        </Form.Group>

                        {/*in the future, use 'selected' to default a value in dropdown*/}
                        <Form.Group className="mb-3">
                            <Form.Label>Select the category of attraction</Form.Label>
                            <Form.Select required id="category" onChange={(e) => setOutdoorIndoor(e.target.value)}>
                                {/* <option>Select the category...</option> */}
                                <option value="i">Indoor</option>
                                <option value="o">Outdoor</option>
                            </Form.Select>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Select a subcategory</Form.Label>
                                <Form.Select required onChange={(e) => setCategory(e.target.value)}>
                                    {/* <option>Select the subcategory...</option> */}
                                    <option value="Theme Park">Theme Park</option>
                                    <option value="Zoo/Safari">Zoo/Safari</option>
                                    <option value="Art Gallery">Art Gallery</option>
                                    <option value="Museum">Museum</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Other">Other</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Number of Employees</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter your number of employees..."
                                    required
                                    value={capacity}
                                    onChange={(e) => setCapacity(e.target.value)}
                                />
                            </Form.Group>
                        </Row>

                        <Button
                            onClick={registerBusiness}
                            className="mt-4 float-end"
                            variant="success"
                            type="submit"

                        >
                            Next{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                />
                            </svg>
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default RegisterBusiness;
