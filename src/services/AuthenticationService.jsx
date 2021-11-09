import axios from "axios";

const REGISTER_API_URL = "http://localhost:8080/users";
const AUTH_API_URL = "http://localhost:8080/users/search";

class AuthenticationService {
  registerUser = async (user) => {
    return axios
      .post(REGISTER_API_URL, user)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(response.data));
        // console.log(localStorage.getItem("user"));
        // return response.data;
        console.log(JSON.parse(localStorage.getItem("user")).id);
      })
      .catch((err) => {
        console.log(err);
        // this.signOut();
        return "failed";
      });
  };
  //store user after registering, register business and use id from local storage
  //then store business under user, and sign out.

  registerBusiness = async (business) => { //somehow need to pull user from registerUser
    return axios
      .post(`http://localhost:8080/users/${JSON.parse(localStorage.getItem("user")).id}/businesses`,
        business,
        {
          auth: {
            username: `${JSON.parse(localStorage.getItem("user")).username}`,
            password: "Tester123", //ask them for password again, error is 401 unauthenticated
          },
        }
      )
      .then((response) => {
        this.signOut();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  authenticate = async (user) => {
    return axios
      .post(AUTH_API_URL, user)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(localStorage.getItem("user"));
        // return response.data;
      })
      .catch((err) => {
        // console.log(err); //make this so 404 shows an alert (lol)
        // throw err;
        return "failed";
      });
  };

  updateUser = async(user) => {
    return axios
      .put(`http://localhost:8080/users/${JSON.parse(localStorage.getItem("user")).id}`, user)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(localStorage.getItem("user"))
      }) //'email' already exists
      .catch((err) => {
        return "duplicateEmail";
      })
  }

  updateUserPassword = async(user, oldPassword) => {
    console.log(JSON.parse(localStorage.getItem("user")).username)
    console.log(oldPassword)
    return axios
      .put(`http://localhost:8080/users/${JSON.parse(localStorage.getItem("user")).id}/changePassword`, user,
      {
        auth: {
          username: `${JSON.parse(localStorage.getItem("user")).username}`,
          password: oldPassword
        }
      }
    )
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data))
      console.log(localStorage.getItem("user"))
    })
    .catch((err) => {
      return "wrongPassword"
    })
  }

  signOut() {
    // localStorage.clear();
    localStorage.removeItem("user");
    localStorage.removeItem("employees");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  isLoggedIn() {
    if (localStorage.getItem("user") === null) {
      return false;
    }
    return true;
  }
}

export default new AuthenticationService();
