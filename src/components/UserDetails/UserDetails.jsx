import NavBar from "../NavBar/NavBar";
import VerticalNavBarUser from "../VerticalNavBar/VerticalNavBarUser";
import UserInformation from "./UserInfomation";
import {Container, Row, Col} from 'react-bootstrap';

const UserDetails = () => {
    return (
        <div className="userdetailspage">
            <NavBar />

            <Container>
                <Row className="bg-light mt-3 mb-3 pt-3 pb-2">
                    <h1 style={{fontSize: "20px", fontWeight:"500"}}>User Accounts</h1>
                </ Row>
                <Row>
                    <Col className="bg-dark" xs={2}>
                        <VerticalNavBarUser />
                    </Col>
                    <Col style={{background : "grey"}} className="ms-3">
                        <UserInformation />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default UserDetails;