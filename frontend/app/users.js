import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
  }

  componentDidMount() {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => this.setState({users: data}));

  }

  render() {
    const users = this.state.users.map(user => <User key={user} user={user}/>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          {users}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

class User extends Component {
  render() {
    return (
      <div>
        <b>User: {this.props.user}</b>
      </div>
    )
  }
}

export default Users
