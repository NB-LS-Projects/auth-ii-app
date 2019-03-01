import React from "react";
import axios from 'axios';
class SignUp extends React.Component {
  state={
    username: '',
    password: '',
    department: '',
  }
  
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };


  registerUser = e => {
    e.preventDefault();

    const endpoint = 'http://localhost:8000/api/register'

    axios.post(endpoint, this.state)
    .then(res => {
      console.log(res)
      localStorage.setItem('jwt', res.data.token)
      this.props.history.push('/users');
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  
  render() {
    return (
      <div>
        <form onSubmit={this.registerUser}>
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
          <div>
            <label htmlFor="department">Department</label>
            <input
              type="text"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
