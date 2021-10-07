import { Container, Row, Col } from 'react-bootstrap';

const UserInformation = () => {
    return ( 
        <Container style={{height : "80vh"}} className="p-0">
            <ul style={{fontSize : "18px", listStyle: "none"}}>
                <li className="mt-4 mb-3"> 
                    <p>Username: Kang Chin Shen</p>
                </li>
                <li className="mb-3"> 
                    <p>Email ID: kingkang69@420.com</p>
                </li>
                <li className="mb-3"> 
                    <p>Contact Number: 87654321</p>
                </li>
                <li className="mb-3"> 
                    <p>Vaccination Status: Vaccinated</p>
                </li>
            </ul>
            
        </Container>
    );
}
 
export default UserInformation;