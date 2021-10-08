import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { useHistory } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { login } from "../../actions/authActions";
import { connect } from "react-redux";


const Login = ({ auth, login, error }) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function resetLoginForm() {
      setEmail("");
      setPassword("");
    }
  
    function newAccount() {
      history.push('/createAccount');
    }
  
    function forgotPassword() {
      history.push('/forgotPassword');
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      login(email, password);
    }
  
    useEffect(() => {
      if (auth.isAuthenticated === true) {
        if (auth.user.username == "admin@psa.com") {
          history.push("/webServicesSettings");
        } else {
          history.push("/");
        }
      }
    }, [auth]);
  
    useEffect(() => {
      if (error.status != null) {
        resetLoginForm();
        setErrorMsg("Invalid email and password");
      }
    }, [error]);

    return (
        <div className="loginPage">
            <NavBar />
            <div className="Login">
                <h1 className="d-flex justify-content-center mt-4">Welcome to COVID</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label className="d-flex justify-content-center mt-4">Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group size="lg" controlId="password">
                        <Form.Label className="d-flex justify-content-center mt-4">Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-center mt-4">
                        <Button block size="lg" type="submit" disabled={!validateForm()} onClick={(event) => this.handleSubmit(event)}>
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
            <Footer />
        </div>
    );
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    error: state.errorß
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      login: (email, password) => dispatch(login(email, password))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);