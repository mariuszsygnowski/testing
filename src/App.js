import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import UserList from "./components/UserList";

import logo from "./acre-logo.svg";
import "./App.scss";

import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

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
          <mobiscroll.Page>
            <mobiscroll.Form>
              <div className="mbsc-form-group">
                <div className="mbsc-form-group-title">Account information</div>
                <mobiscroll.Input placeholder="What is your first name?">
                  First Name
                </mobiscroll.Input>
                <mobiscroll.Input placeholder="What is your last name?">
                  Last Name
                </mobiscroll.Input>
                <mobiscroll.Input type="email" placeholder="me@domain.com">
                  Email
                </mobiscroll.Input>
                <mobiscroll.Input
                  type="password"
                  placeholder="Minimum 6 characters"
                  passwordToggle={true}
                >
                  Password
                </mobiscroll.Input>
              </div>

              <div className="mbsc-form-group">
                <div className="mbsc-form-group-title">About you</div>
                <mobiscroll.Segmented name="gender" defaultChecked>
                  Male
                </mobiscroll.Segmented>
                <mobiscroll.Segmented name="gender">
                  Female
                </mobiscroll.Segmented>

                <mobiscroll.Stepper
                  defaultValue={170}
                  val="left"
                  min={130}
                  max={220}
                  step={1}
                >
                  Height (cm)
                </mobiscroll.Stepper>

                <mobiscroll.Stepper
                  defaultValue={85}
                  val="left"
                  min={30}
                  max={180}
                  step={1}
                >
                  Weight (kg)
                </mobiscroll.Stepper>
              </div>
              <div className="mbsc-form-group">
                <div className="mbsc-form-group-title">General settings</div>
                <mobiscroll.Switch>Indoor/Treadmill</mobiscroll.Switch>
                <mobiscroll.Switch defaultChecked>
                  Auto-Pause Run
                  <span className="mbsc-desc">
                    Automatically pause workout when you stop moving. This is
                    useful if you don\`t want to manually pause and resume.
                  </span>
                </mobiscroll.Switch>
              </div>
              <div className="mbsc-form-group">
                <div className="mbsc-form-group-title">On screen</div>
                <mobiscroll.Switch defaultChecked>Heart Rate</mobiscroll.Switch>
                <mobiscroll.Switch>Cheers</mobiscroll.Switch>
                <mobiscroll.Segmented name="pace" defaultChecked>
                  Show current pace
                </mobiscroll.Segmented>
                <mobiscroll.Segmented name="pace">
                  Show average pace
                </mobiscroll.Segmented>
              </div>

              <div className="mbsc-form-group">
                <div className="mbsc-form-group-title">Run countdown</div>
                <mobiscroll.Radio name="group">Off</mobiscroll.Radio>
                <mobiscroll.Radio name="group" defaultChecked>
                  3 seconds
                </mobiscroll.Radio>
                <mobiscroll.Radio name="group">6 seconds</mobiscroll.Radio>
                <mobiscroll.Radio name="group">9 seconds</mobiscroll.Radio>
              </div>

              <div className="mbsc-btn-group-block">
                <mobiscroll.Button>Save Settings</mobiscroll.Button>
              </div>
            </mobiscroll.Form>
          </mobiscroll.Page>
          <header className="app__header">
            <img src={logo} className="app__logo" alt="logo" />

            <h1>Welcome to acre</h1>

            <h2>Users</h2>

            <select
              className="app__select"
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
