import axios from "axios";

const REGISTER_API_URL = "http://localhost:8080/users"
const AUTH_API_URL = "http://localhost:8080/users/search"

class AuthenticationService {
    registerUser = (user) => {
        return axios
            .post(REGISTER_API_URL, user)
            .then((response) => {
                localStorage.clear();
                localStorage.setItem("user", JSON.stringify(response.data));
                // console.log(localStorage.getItem("user"));
                // return response.data;
                console.log(JSON.parse(localStorage.getItem("user")).id)
            })
            .catch((err) => {
                console.log(err);
                // this.signOut();
            });
    };
//store user after registering, register business and use id from local storage
//then store business under user, and sign out.

    registerBusiness = async (business) => {
        return await axios
            .post(`http://localhost:8080/users/${JSON.parse(localStorage.getItem("user")).id}/businesses`,
            business,
                { headers: 
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        // Authorization: `Basic ${JSON.parse(localStorage.getItem("user")).username}:${JSON.parse(localStorage.getItem("user")).password}`
                        'Authorization': 'Basic hihi@gmail.com:Tester123'
                    }
                }
            )
            .then((response) => {
                this.signOut();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    authenticate = (user) => {
        return axios
            .post(AUTH_API_URL, user)
            .then((response) => {
                localStorage.setItem("user", JSON.stringify(response.data));
                console.log(localStorage.getItem("user"));
                // return response.data;
            })
            .catch((err) => {
                console.log(err);
                throw err;
            });
    };

    signOut() {
        localStorage.clear();
        // localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

    isLoggedIn() {
        return localStorage.getItem("user") ? true : false
    }
}

export default new AuthenticationService();