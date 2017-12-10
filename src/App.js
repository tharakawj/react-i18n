import React, { Component } from "react";
import { FormattedMessage, injectIntl, defineMessages } from "react-intl";
import Intro from "./Intro";
import logo from "./logo.svg";
import "./App.css";

const name = "React";
const path = "src/App.js";

// You can use `defineMessages`, `injectIntl` and `formatMessage` to
// format a string to pass as a prop
const messages = defineMessages({
  subTitle: {
    id: "subTitle",
    defaultMessage: "To get started, edit {path} and save to reload."
  }
});

class App extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {/* For JSX string you can simple use `FormattedMessage` component */}
            <FormattedMessage
              id={"title"}
              defaultMessage={"Welcome to {name}"}
              values={{ name }}
            />
          </h1>
        </header>
        <Intro text={formatMessage(messages.subTitle, { path })} />
      </div>
    );
  }
}

export default injectIntl(App);
