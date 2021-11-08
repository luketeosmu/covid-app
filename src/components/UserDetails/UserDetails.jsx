import NavBar from "../NavBar/NavBar";
import VerticalNavBarUser from "../VerticalNavBar/VerticalNavBarUser";
import UserInformation from "./UserInfomation";
import {Container, Row, Col} from 'react-bootstrap';
import Footer from "../Footer/Footer";

const UserDetails = () => {
    return (
        <div className="userdetailspage">
            <NavBar />

            <Container>
                <Row className="bg-light mt-3 mb-3 pt-3 pb-2">
                    <h1 className="ps-5" style={{fontSize: "20px", fontWeight:"500"}}>User Account Details</h1>
                </ Row>
                <Row>
                    <div className="bg-light">
                        < UserInformation />
                    </div>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}
 
export default UserDetails;