import React, { Component } from "react";
import { LoginTemplate } from "./../components/templates";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleChange = (e) => {
    // clone
    const state = { ...this.state };
    // edit
    state[e.currentTarget.name] = e.currentTarget.value;
    // set State
    this.setState(state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSuccessLogin();
  };

  render() {
    return (
      <LoginTemplate
        EmailValue={this.state.email}
        passwordValue={this.state.password}
        onChangeEmail={this.handleChange}
        onChangePassword={this.handleChange}
        onSubmit={this.handleSubmit}
      ></LoginTemplate>
    );
  }
}
