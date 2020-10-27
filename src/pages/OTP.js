import { Component } from "react";
import { MessageTypes } from "../enums";
import { OTPTemplate } from "../components/templates";

export class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = { otp: "" };
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
    this.props.onVerifyOTP(MessageTypes.Fail);
  };

  render() {
    return (
      <OTPTemplate
        value={this.state.otp}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      ></OTPTemplate>
    );
  }
}
