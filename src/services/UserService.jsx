// import axios from "axios";
// import authHeader from "../util/authHeader";

// const GET_PROFILE_URL = `http://54.225.36.72:8080/get-profile`;

// class UserService {
//     // Put profile in local storage
//     setProfileIntoLocalStorage = () => {
//         return axios.get(GET_PROFILE_URL, { headers: authHeader() }).then((res) => {
//             localStorage.setItem("userProfile", JSON.stringify(res.data));
//         });
//     };

//     // Get profile
//     getProfile() {
//         return JSON.parse(localStorage.getItem("userProfile"));
//     }
// }

// export default new UserService();
