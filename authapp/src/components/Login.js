import React, { useState } from "react";
import axios from 'axios';


class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const endpoint = 'http://localhost:8000/api/login'

    axios.post(endpoint, this.state)
    .then(res => {
      console.log(res)
      localStorage.setItem('jwt', res.data.token)
      this.props.history.push('/users')
    })
    .catch(err => {
      console.log(err)
    })


  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
