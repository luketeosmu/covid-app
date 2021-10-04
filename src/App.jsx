import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login.jsx"
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
    <Switch>
        <Route path='/' exact component={Register}/>
    </Switch>
    </Router>
  );
}

export default App;
