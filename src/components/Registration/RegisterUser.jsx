import { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { Card, Container } from 'react-bootstrap'

const RegisterUser = () => {
    // const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <NavBar />
            <Container>
                <Card>
                    <h2></h2>
                </Card>
            </Container>
        </div>
    )
}

export default RegisterUser
