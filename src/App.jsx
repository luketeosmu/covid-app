import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login.jsx"
import Register from './components/Registration/Registration';
import EmployeeList from './components/Employees/EmployeeList/EmployeeList';
import Home from './components/Home/Home';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import NewsMainPage from './components/News/NewsMainPage';
import GeneralMeasures from './components/GeneralMeasures/GeneralMeasures'
import FETTesting from './components/FETTesting/FETTesting';
import UserDetails from './components/UserDetails/UserDetails';
import NewsApi from "./components/_News_COPY/NewsApi";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login}/>
        <Route path="/" exact component={Home} />
        <Route path='/register' exact component={Register}/>
        <Route path='/employees' exact component={EmployeeList}/>
        <Route path='/forgotpassword' exact component={ForgotPassword}/>
        <Route path = "/news" exact component = {NewsMainPage}/>
        <Route path = "/covidmeasures" exact component = {GeneralMeasures}/>
        <Route path = "/userdetails" exact component = {UserDetails}/>
        <Route path = "/fettest" exact component = {FETTesting}/>
        <Route path = '/testingnewsapi' exact component = {NewsApi}/>
      </Switch>
    </Router>
  );
}

export default App;
