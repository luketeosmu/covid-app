import React from "react";
import NavBar from "../NavBar/NavBar";
import { Form, Col, Row, Button, Container, Card } from "react-bootstrap";

const RegisterBusiness = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Card className="p-5">
          <h2 className="d-flex justify-content-center mb-4">
            Let's add a few more details...
          </h2>
          <Form>
            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label>What is the name of your business?</Form.Label>
              <Form.Control type="text" placeholder="Enter business name..." />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label>Select the category of attraction</Form.Label>
              <Form.Select aria-label="Default select example">
                  <option>Select the category...</option>
                  <option value="1">Indoor</option>
                  <option value="2">Outdoor</option>
                </Form.Select>
            </Form.Group> */}

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Select a subcategory</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select the subcategory...</option>
                  <option value="1">Theme Park</option>
                  <option value="2">Zoo/Safari</option>
                  <option value="3">Art Gallery</option>
                  <option value="4">Museum</option>
                  <option value="5">Entertainment</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Number of Employees</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your number of employees..."
                />
              </Form.Group>
            </Row>

            <Button
              href="/"
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
