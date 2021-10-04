import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';

const CovidStat = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-3">Total Cases</Card.Title>
                            <Card.Subtitle className="text-center">
                            103,843
                            </Card.Subtitle>
                            <Card.Text className="text-center text-muted">
                                + 2408
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-3">Active Cases</Card.Title>
                            <Card.Subtitle className="text-center">
                            21,804
                            </Card.Subtitle>
                            <Card.Text className="text-center text-muted">
                                + 2048
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-3">Deaths</Card.Title>
                            <Card.Subtitle className="text-center">
                            113
                            </Card.Subtitle>
                            <Card.Text className="text-center text-muted">
                                + 5
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-3">Discharged</Card.Title>
                            <Card.Subtitle className="text-center">
                            81,926
                            </Card.Subtitle>
                            <Card.Text className="text-center text-muted">
                                + 1252
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="text-center">
                        <Card.Header>Featured Headlines</Card.Header>
                        <Card.Body>
                            <Card.Title>Man successfully beats Covid-19 by doing bicep curls at the gym</Card.Title>
                            <Card.Text>
                            Buff Lord decides to go to the gym and the sheer testosterone he exudes caused the virus to leave the body in fear.
                            </Card.Text>
                            <h6>*insert image here*</h6>
                            <h6>*shaun ting</h6>
                            <a href="">Link to original article</a>
                        </Card.Body>
                        <Card.Footer className="text-muted">Last Updated: 2 days ago</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
        
        
    )
}

export default CovidStat
