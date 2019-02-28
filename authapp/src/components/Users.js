import React from "react";
import axios from 'axios'


class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    const endpoint = 'http://localhost:8000/api/users'

    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
        authorization: token
      }
    }


    axios.get(endpoint, options)
    .then(res => {
      this.setState({
        users: res.data
      })
      
    })
    .catch(err => {
      console.log(err)
    })


  }


  render() {

    

    return (
      <div>
        <h1>User List</h1>
        <div>
          {
            this.state.users.map(user => {
              return <div key={user.id}>
              <h2>{user.username}</h2>
              <p>{user.department}</p>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default Users;
