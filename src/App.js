import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import './print.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Overview} />
      </Router>
    );
  }
}

export default App;
