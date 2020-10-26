import * as React from "react";
import { DynamicModal, Login } from "../components/organisms";
import { LandingPageTemplate } from "../components/templates";

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, modalContent: null };
  }

  handleClick = () => {
    const loginPage = <Login></Login>;
    this.setState({ modalIsOpen: true, modalContent: loginPage });
  };

  render() {
    return (
      <React.Fragment>
        <LandingPageTemplate onClick={this.handleClick}></LandingPageTemplate>
        <DynamicModal open={this.state.modalIsOpen}>
          {this.state.modalContent}
        </DynamicModal>
      </React.Fragment>
    );
  }
}
