import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Container, Card, Row, Badge } from 'react-bootstrap'
import Footer from "../Footer/Footer";

const FETTesting = () => {

    const employees = [
        { id: 12, name: "Otto", status: true, testdate: "2/1/22" },
        { id: 34, name: "John", status: false, testdate: "2/2/22" },
        { id: 45, name: "Mary", status: true, testdate: "2/3/22" },
        { id: 56, name: "Steve", status: false, testdate: "2/4/22" },
        { id: 78, name: "Kang", status: false, testdate: "2/5/22" },
        { id: 90, name: "Roys", status: false, testdate: "2/6/22" },
        { id: 321, name: "Jian Yi", status: true, testdate: "2/7/22" },
        { id: 324, name: "Yash", status: false, testdate: "2/8/22" },
        { id: 656, name: "Luke", status: true, testdate: "2/9/22" },
        { id: 767, name: "Shaun", status: true, testdate: "2/10/22" },
        { id: 986, name: "Sean", status: true, testdate: "2/11/22" },
        { id: 4213, name: "Josh", status: true, testdate: "2/12/22" },
        { id: 5739, name: "Rahmat", status: true, testdate: "2/13/22" },
        { id: 7683, name: "Otto", status: false, testdate: "2/14/22" },
        { id: 9778, name: "Jennifer", status: true, testdate: "2/15/22" },
        { id: 12487, name: "William", status: true, testdate: "2/16/22" },
    ]

    var today = new Date().toDateString()

    return (
        <div className="fettesing">
            <NavBar />
            <Card className="text-center pb-5">
                <Card.Header as="h2">
                    FET Testing
                </Card.Header>
                <Container className="mt-5 mb-5">
                    <h6>Today: {today}</h6>
                    {employees.map(employee => (
                        <Card className="pe-4 ps-4 pt-2 pb-1">
                            <Card.Body className="text-start">
                                <big>{employee.name}</big>&nbsp;&nbsp;
                                <span style={{
                                    float: "right", backgroundColor: "#ddd",
                                    border: "none",
                                    color: "black",
                                    padding: "10px 20px",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    display: "inline-block",
                                    margin: "4px 2px",
                                    borderRadius: "16px"
                                }}>
                                    {employee.status ? "Vaccinated" : "Unvaccinated"}
                                </span>
                                <p style={{ fontSize: "11px" }}>(Last Tested: {employee.testdate})
                                </p>

                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </Card>
            <Footer />
        </div>
    )
}

export default FETTesting
