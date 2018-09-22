import React, { Component } from 'react';
import Ranglijst from "./components/Ranglijst";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>100 meter - Jongens B</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Ranglijst rijen={[{
                naam: 'Mieke van der Kolk',
                onderdeel: '100 meter',
                categorie: 'Vrouwen outdoor',
                prestatie: '12,34 (12,1)',
                plaats: 'Santpoort',
                datum: new Date(1993, 6, 4)
              }]} />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
