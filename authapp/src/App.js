
import "./App.css";
import React, { Component } from "react";


import { NavLink, Route } from "react-router-dom";

import Login from './components/Login';
import Users from "./components/Users"
import SignUp from './components/SignUp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/users'>Users</NavLink>
        </div>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/users' component={Users} />
      </div>
    );
  }
}

export default App;
