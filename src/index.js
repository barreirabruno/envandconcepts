import React, { Component, Fragment } from "React";
import { render } from "react-dom";

import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: (this.state.counter += 1) });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello RocketSeat</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Chamando com o children</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
