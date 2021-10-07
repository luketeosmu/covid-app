import React from 'react'
import ForgotPasswordNavBar from './ForgotPasswordNavBar'
import ForgotPasswordForm from './ForgotPasswordForm'
import Footer from "../Footer/Footer";

const ForgotPassword = () => {

    return (
        <div className="forgotPassword">
            <ForgotPasswordNavBar />
            <ForgotPasswordForm />
            <div style={{position: "fixed", bottom:"0px"}}>
                <Footer/>
            </div>
        </div>
    )
}

export default ForgotPassword
