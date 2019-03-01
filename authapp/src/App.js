
import "./App.css";
import React, { Component } from "react";


import { NavLink, Route, withRouter } from "react-router-dom";

import Login from './components/Login';
import Users from "./components/Users"
import SignUp from './components/SignUp'

class App extends Component {
  
  logout = e => {
    e.preventDefault();
    
    localStorage.removeItem('jwt');
    this.props.history.push('/login')


  }
  
  render() {
    return (
      <div className="App">
        <div>
          <NavLink to='/login'>Login</NavLink>
          
          {
            !localStorage.getItem('jwt') ? null : <NavLink to='/users'>Users</NavLink>
          }
          {!localStorage.getItem('jwt') ? <NavLink to='/signup'>Sign Up</NavLink> : null}
          {!localStorage.getItem('jwt') ? null : <button onClick={this.logout}>Log Out</button>}
        </div>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/users' component={Users} />
      </div>
    );
  }
}

export default withRouter(App);
