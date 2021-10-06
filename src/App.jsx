import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login.jsx"
import NavBar from './components/NavBar/NavBar';
import Register from './components/Registration/Registration';
import EmployeeList from './components/Employees/EmployeeList/EmployeeList';
import Home from './components/Home/Home';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ForgotPasswordNavBar from './components/ForgotPassword/ForgotPasswordNavBar';
import ForgotPasswordForm from './components/ForgotPassword/ForgotPasswordForm';
import NewsMainPage from './components/News/NewsMainPage';
import GeneralMeasures from './components/GeneralMeasures/GeneralMeasures'
import FETTesting from './components/FETTesting/FETTesting';
import VerticalNavBarUser from './components/VerticalNavBar/VerticalNavBarUser';
import UserDetails from './components/UserDetails/UserDetails';
import VerticalNavBarCovid from './components/VerticalNavBar/VerticalNavBarCovid';
import UserInformation from './components/UserDetails/UserInfomation';


function App() {
  return (
    <Router>
    <Switch>
       <Route path='/login' exact component={Login}/>
       <Route path="/" exact component={Home} />
       <Route path='/register' exact component={Register}/>
       <Route path='/Employees' exact component={EmployeeList}/>
       <Route path='/ForgotPassword' exact component={ForgotPassword}/>
       <Route path = "/News" exact component = {NewsMainPage}/>
       <Route path = "/CovidMeasures" exact component = {GeneralMeasures}/>
       <Route path = "/UserDetails" exact component = {UserDetails}/>
       <Route path = "/fettest" exact component = {FETTesting}/>
    </Switch>
    </Router>
  );
}

export default App;
