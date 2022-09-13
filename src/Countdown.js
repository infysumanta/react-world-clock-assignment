import React, { Component } from "react";

class Countdown extends Component {
  render() {
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
                <button className="countdown-btn">⬆</button>
                <button className="countdown-btn">⬆</button>
                <button className="countdown-btn">⬆</button>
              </div>
              <div className="countdown-timer">00 : 00 : 00</div>
              <div className="card-flex">
                <button className="countdown-btn">⬇</button>
                <button className="countdown-btn">⬇</button>
                <button className="countdown-btn">⬇</button>
              </div>
            </div>
            <div className="card-footer">
              <button>Start</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Countdown;
