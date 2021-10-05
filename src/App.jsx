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

function App() {
  return (
    <Router>
    <Switch>
        <Route path='/login' exact component={Login}/>
        <Route path="/home" exact component={Home} />
        <Route path='/' exact component={Register}/>
        <Route path='/Employees' exact component={EmployeeList}/>
        <Route path='/ForgotPassword' exact component={ForgotPassword}/>
    </Switch>
    </Router>
  );
}


export default App;
