import React from 'react'
import { Card, Row, Col, Container, Carousel } from 'react-bootstrap';
import News from '../News/News'
import BriefNewsArticle from '../News/BriefNewsArticle';
import { NewsContext, NewsContextProvider } from "../News/NewsContext";

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
                        
                        </Card.Body>
                        <Card.Footer className="text-muted">Last Updated: 2 days ago</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
        
        
    )
}

export default CovidStat
