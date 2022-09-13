import React, { Component } from "react";

class StopWatch extends Component {
  render() {
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
            <div className="card-body stopwatch-timer">00 : 00 : 00 : 00</div>
            <div className="card-footer">
              <button>Start</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StopWatch;
