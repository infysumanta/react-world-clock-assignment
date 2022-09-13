import "./App.css";

import React, { Component } from "react";
import StopWatch from "./StopWatch";
import Countdown from "./Countdown";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatch: false,
      countdown: false,
    };
  }

  close = (key) => {
    this.setState({ [key]: false });
  };
  render() {
    return (
      <div className="App">
        <div className="app-title">🚀 Timers 🚀</div>
        <div className="timer-container">
          <div className="stopwatch-container">
            {!this.state.stopwatch ? (
              <button onClick={() => this.setState({ stopwatch: true })}>
                Show Stopwatch
              </button>
            ) : (
              <StopWatch close={this.close} />
            )}
          </div>
          <div className="countdown-container">
            {!this.state.countdown ? (
              <button onClick={() => this.setState({ countdown: true })}>
                Show Countdown
              </button>
            ) : (
              <Countdown close={this.close} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
