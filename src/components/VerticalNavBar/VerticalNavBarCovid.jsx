import React from 'react'
import { Nav } from 'react-bootstrap'

const VerticalNavBarCovid = () => {
    return ( 
        <div class="verticalNavBarCovid">
            <Nav className="flex-column mt-3">
                <Nav.Item>
                    <Nav.Link href="#" style={{color: "white"}}>INDOORS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#" style={{color: "white"}}>OUTDOORS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#" style={{color: "white"}}>OTHERS...</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#" style={{color: "white"}}>OTHERS...</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#" style={{color: "white"}}>OTHERS...</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}
 
export default VerticalNavBarCovid;