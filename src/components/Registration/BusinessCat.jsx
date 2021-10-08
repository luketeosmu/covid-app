import { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import './BusinessCat.css'

const BusinessCat = () => {
    const [indoor, setIndoor] = useState(false);
    const [outdoor, setOutdoor] = useState(false);
    
    return (
        <div>
            <NavBar />
            <Container>
                <Row>
                    <Col className="mt-4">
                        <Card className={`${indoor ? 'event':''}`} onClick={() => indoor ? setIndoor(false) : setIndoor(true)}>
                            <Card.Img src="https://www.holidify.com/images/cmsuploads/compressed/Opera-Gallery_20180612233149.jpg" alt="jewel changi" height="800px" />
                            <Card.ImgOverlay>
                                <Card.Title className="category-title">Indoor</Card.Title>
                                <Card.Text className="category-subtitle">(e.g. Museum, Art Gallery)</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col className="mt-4">
                        <Card className={`${outdoor ? 'event':''}`} onClick={() => outdoor ? setOutdoor(false) : setOutdoor(true)}>
                            <Card.Img src="https://static.honeykidsasia.com/wp-content/uploads/2021/02/universal-studios-singapore-kids-family-guide-honeykids-asia.jpg" alt="uss" height="800px" />
                            <Card.ImgOverlay>
                                <Card.Title className="category-title">Outdoor</Card.Title>
                                <Card.Text className="category-subtitle">(e.g. Theme Park, Zoo)</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button href="businessform" className="mt-4 mb-5 float-end" variant="success" type="submit">
                            Next <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BusinessCat
