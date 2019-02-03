import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import UserList from "./components/UserList";

import logo from "./acre-logo.svg";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //initail selected role
      selectedRole: "ADMIN"
    };
    this.handleChangeSelectedRole = this.handleChangeSelectedRole.bind(this);
  }

  handleChangeSelectedRole(event) {
    this.setState({
      selectedRole: event.target.value
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />

            <h1>Welcome to acre</h1>

            <h2>Users</h2>

            <select
              value={this.state.selectedRole}
              onChange={this.handleChangeSelectedRole}
            >
              <option value="ADMIN">Admin</option>
              <option value="BROKER">Broker</option>
              <option value="ADVISOR">Advisor</option>
            </select>

            <UserList selectedRole={this.state.selectedRole} />
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
