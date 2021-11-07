import React from 'react';
import NavBar from '../NavBar/NavBar'
import VerticalNavBarCovid from '../VerticalNavBar/VerticalNavBarCovid';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from "../Footer/Footer";

// General Measures:
import InfoPrepareFacilities from './InfoPrepareFacilities';
import InfoManagingArrival from './InfoManagingArrival';
import InfoAttractionPlans from './InfoInAttractionPlans';
import InfoInfectionControl from './InfoInfectionControl';
import InfoSafeWorkplace from './InfoSafeWorkplace';
import InfoMarketingCommunication from './InfoMarketingCommunication';

const GeneralMeasures = () => {
    return (
        <div class="generalMeasuresPage">
            <NavBar />
            <Container >
                <Row className="bg-light mt-3 mb-3 pt-3 pb-2">
                    <h1 style={{fontSize: "20px", fontWeight:"500"}}>General Measures for Attractions</h1>
                </ Row>
                <Row>
                    <Col className="bg-light" xs={3} style={{overflow: 'hidden'}}>
                        <VerticalNavBarCovid />
                    </Col>
                    <Col className="m-3">
                        <InfoPrepareFacilities />
                        <InfoManagingArrival />
                        <InfoAttractionPlans />
                        <InfoInfectionControl />
                        <InfoSafeWorkplace />
                        <InfoMarketingCommunication />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}
 
export default GeneralMeasures;