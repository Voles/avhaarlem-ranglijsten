import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Historie from "./pages/Historie";
import './print.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Overview} />
        <Route path="/historie" component={Historie} />
      </Router>
    );
  }
}

export default App;
