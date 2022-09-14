import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
    };
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });

    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
    });
  };

  render() {
    const { timerTime } = this.state;
    let miliSeconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <>
        <div
          className="close-card"
          onClick={() => this.props.close("stopwatch")}
        >
          X
        </div>
        <div className="card">
          <div className="flex-card">
            <div className="card-title">Stopwatch</div>
            <div className="card-body stopwatch-timer">
              {hours} : {minutes} : {seconds} : {miliSeconds}
            </div>
            <div className="card-footer">
              {this.state.timerOn === false && this.state.timerTime === 0 && (
                <button onClick={this.startTimer}>Start</button>
              )}
              {this.state.timerOn === true && (
                <button onClick={this.stopTimer}>Stop</button>
              )}
              {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button onClick={this.startTimer}>Resume</button>
              )}
              {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button onClick={this.resetTimer}>Reset</button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StopWatch;
