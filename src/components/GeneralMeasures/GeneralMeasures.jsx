import React from 'react';
import NavBar from '../NavBar/NavBar'
import VerticalNavBar from '../VerticalNavBar/VerticalNavBar';
import {Container, Row, Col} from 'react-bootstrap';

const GeneralMeasures = () => {
    return (
        <div className="generalMeasuresPage">
            <NavBar />

            <Container >
                <Row className="bg-light mt-3 pt-3 pb-2">
                    <h1 style={{fontSize: "20px", fontWeight:"500"}}>General Measures for Attractions</h1>
                </ Row>
                <Row className="bg-primary">
                    <Col className="bg-danger" xs={2}>
                        <VerticalNavBar />
                    </ Col>
                    <Col>
                        <h1>Content</h1>
                    </Col>

                </Row>
                
            </Container>
            
        </div>
    );
}
 
export default GeneralMeasures;