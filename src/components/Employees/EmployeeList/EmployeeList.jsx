import React from "react";
import {
  Table,
  Card,
  InputGroup,
  Form,
  Button,
  Container,
  Tooltip,
  OverlayTrigger,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import "./EmployeeList.css";
import NavBar from "../../NavBar/NavBar";
import { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import EmployeeService from '../../../services/EmployeeService';
import FETTesting from "../../FETTesting/FETTesting";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    // console.log("hi")
    EmployeeService.getEmployees().then(() => { setEmployees(JSON.parse(localStorage.getItem("employees"))) })
    // ((res) => {
    //   if(localStorage.getItem("employees") == null){

    //   }
    // })
  })

  const [employeeId, setEmployeeId] = useState(0);
  const [employeeName, setEmployeeName] = useState("");
  const [employeeStatus, setEmployeeStatus] = useState(true);
  const [employeeFET, setEmployeeFET] = useState("");
  function validateForm() {
    return employeeId !== 0 && employeeName.length > 0;
  }

  const addEmployee = (e) => {
    e.preventDefault();
    let employee = {
      id: employeeId,
      name: employeeName,
      vaxStatus: employeeStatus,
      fetDate: employeeFET
    };
    console.log(employee);

    EmployeeService.addEmployee(employee)
      .then((res) => {
        // history.push({
        //   pathname: "/businessform",
        // });
        handleClose();
      });
  };

  const deleteEmployee = (e) => {
    EmployeeService.deleteEmployee(tempId)
    .then((res) => {
      handleNoDelete();
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [warning, setWarning] = useState(false);
  const [tempId, setTempId] = useState(-1);

  const handleNoDelete = () => {
    setWarning(false);
    setTempId(-1);
  }
  const handleDelete = (id) => {
    setWarning(true);
    setTempId(id);
  }
  const renderTooltip = (props) => (
    <Tooltip className="me-2" id="button-tooltip" {...props}>
      Add New Employee
    </Tooltip>
  );

  return (
    <div>
      <NavBar />
      <Card className="text-center pb-5">
        <Card.Header as="h2">Manage Employees</Card.Header>
        {/* <div className="d-flex justify-content-center mt-5">
                    <h4> List of Employees </h4>
                </div> */}
        <Container className="mt-5">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Try searching by Employee ID, Employee Name, Vaccinated/Unvaccinated..."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <Button
              variant="outline-secondary"
              variant="success"
              id="button-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </InputGroup>
        </Container>
        <Container>
          <div className="Table mb-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Vaccinated?</th>
                  <th>Next FET Test</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {employees
                  .filter((employee) => {
                    if (searchTerm === "") {
                      return employee;
                    } else if (
                      employee.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return employee;
                    } else if (
                      employee.id.toString().includes(searchTerm.toString())
                    ) {
                      return employee;
                    } else if (
                      employee.vaxStatus == true &&
                      (searchTerm.toLowerCase() == "yes" ||
                        searchTerm.toLowerCase() == "vaccinated")
                    ) {
                      return employee;
                    } else if (
                      employee.vaxStatus == false &&
                      (searchTerm.toLowerCase() == "no" ||
                        searchTerm.toLowerCase() == "unvaccinated")
                    ) {
                      return employee;
                    }
                  })
                  .map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>{employee.name}</td>
                      <td>{employee.vaxStatus ? "Yes" : "No"}</td>
                      <td>{employee.fetDate}</td>
                      <td><button onClick={() => handleDelete(employee.id)} style={{ border: "none", backgroundColor: "transparent" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                      </svg></button></td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
          <Modal show={warning} onHide={handleNoDelete} centered>
            <Modal.Header className="justify-content-center">
              <Modal.Title>Warning</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p className="text-center pt-3">Are you sure you wish to remove this employee?</p>
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-center">
              <Button onClick={handleNoDelete} className="ps-4 pe-4"variant="danger">No</Button>
              <Button onClick={deleteEmployee} className="ps-4 pe-4" variant="success">Yes</Button>
            </Modal.Footer>
          </Modal>
        </Container>
        <Container className="mb-5 fixed-bottom text-end">
          <OverlayTrigger
            placement="left"
            delay={{ show: 100, hide: 150 }}
            overlay={renderTooltip}
          >
            <Button
              style={{
                width: "60px",
                height: "60px",
                padding: "10px 16px",
                borderRadius: "35px",
                fontSize: "12px",
                textAlign: "center",
              }}
              onClick={handleShow}
              className="mt-5"
              variant="primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
              </svg>
            </Button>
          </OverlayTrigger>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title className="ms-4">Add New Employee</Modal.Title>
              {/* <CloseButton /> doesnt work */}
            </Modal.Header>
            <Modal.Body>
              <Form className="ms-4 me-4" onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="e.g. 012345"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Employee Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g. John Smith"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Vaccination Status</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Vaccinated"
                    name="vacRadio"
                    id="vac"
                    onChange={() => setEmployeeStatus(true)}
                    required
                  />
                  <Form.Check
                    type="radio"
                    label="Unvaccinated"
                    name="vacRadio"
                    id="unvac"
                    onChange={() => setEmployeeStatus(false)}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Upcoming FET Testing Date</Form.Label>
                  <Form.Control type="date" onChange={(e) => setEmployeeFET(e.target.value)} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="me-4">
              <Button
                variant="success"
                onClick={addEmployee}
                disabled={!validateForm()}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Card>
      <Footer />
    </div>
  );
};
export default EmployeeList;
