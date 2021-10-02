import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login.jsx"

function App() {
  return (
    <Router>
    <Switch>
        <Route path='/' exact component={Login}/>
    </Switch>
    </Router>
  );
}

export default App;
