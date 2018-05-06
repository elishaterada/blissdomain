import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { time: null }

  componentDidMount() {
    this.ping();
  }

  ping = () => {
    fetch('/api/ping')
      .then(res => res.json())
      .then(ping => this.setState({ time: ping.time }))
  }

  render() {
    const { time } = this.state;

    return (
      <div className="App">
        Current time is { time }
      </div>
    );
  }
}

export default App;
