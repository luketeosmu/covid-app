import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from "../Footer/Footer";
import BusinessInformation from "./BusinessInformation"

const BusinessDetails = () => {
    return (
        <div className="userdetailspage">
            <NavBar />
            <Container>
                <Row className="bg-light mt-3 mb-3 pt-3 pb-2">
                    <h1 className="ps-5" style={{ fontSize: "32px", fontWeight: "500" }}>User Business Details</h1>
                </ Row>
                <Row>
                    <div className="bg-light">
                        < BusinessInformation />
                    </div>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default BusinessDetails
