import React, { Component } from "react";

class Countdown extends Component {
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
      timerStart: this.state.timerTime,
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      console.log(`Time left is 🚀 ${newTime}`);
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime,
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Countdown ended");
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart,
      });
    }
  };

  adjustTimer = (input) => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < 216000000) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <>
        <div
          className="close-card"
          onClick={() => this.props.close("countdown")}
        >
          X
        </div>
        <div className="card">
          <div className="flex-card">
            <div className="card-title">Countdown</div>
            <div className="card-subtitle">Hours : Minutes : Seconds</div>
            <div className="card-body">
              <div className="card-flex">
                <button
                  className="countdown-btn"
                  onClick={() => this.adjustTimer("incHours")}
                >
                  ⬆
                </button>
                <button
                  className="countdown-btn"
                  onClick={() => this.adjustTimer("incMinutes")}
                >
                  ⬆
                </button>
                <button
                  className="countdown-btn"
                  onClick={() => this.adjustTimer("incSeconds")}
                >
                  ⬆
                </button>
              </div>
              <div className="countdown-timer">
                {hours} : {minutes} : {seconds}
              </div>
              <div className="card-flex">
                <button
                  className="countdown-btn"
                  onClick={() => this.adjustTimer("decHours")}
                >
                  ⬇
                </button>
                <button
                  className="countdown-btn"
                  onClick={() => this.adjustTimer("decMinutes")}
                >
                  ⬇
                </button>
                <button
                  className="countdown-btn"
                  onClick={() => this.adjustTimer("decSeconds")}
                >
                  ⬇
                </button>
              </div>
            </div>
            <div className="card-footer">
              {/* <button>Start</button> */}
              {timerOn === false &&
                (timerStart === 0 || timerTime === timerStart) && (
                  <button className="Button-start" onClick={this.startTimer}>
                    Start
                  </button>
                )}
              {timerOn === true && timerTime >= 1000 && (
                <button className="Button-stop" onClick={this.stopTimer}>
                  Stop
                </button>
              )}
              {timerOn === false &&
                timerStart !== 0 &&
                timerStart !== timerTime &&
                timerTime !== 0 && (
                  <button className="Button-start" onClick={this.startTimer}>
                    Resume
                  </button>
                )}

              {(timerOn === false || timerTime < 1000) &&
                timerStart !== timerTime &&
                timerStart > 0 && (
                  <button className="Button-reset" onClick={this.resetTimer}>
                    Reset
                  </button>
                )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Countdown;
