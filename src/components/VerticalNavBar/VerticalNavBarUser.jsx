import React from 'react'
import { Nav } from 'react-bootstrap'

const VerticalNavBarUser = () => {
    return ( 
        <div class="verticalNavBarUser">
            <Nav className="flex-column mt-3">
                <Nav.Item>
                    <Nav.Link href="#" style={{color: "white"}}>PROFILE</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#" style={{color: "white"}}>BUSINESS DETAILS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#" style={{color: "white"}}>YOUR EMPLOYEES</Nav.Link>
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
 
export default VerticalNavBarUser;