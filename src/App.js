import React, { Component } from 'react';
import Ranglijst from "./components/Ranglijst";
import RanglijstSectie from "./components/RanglijstSectie";
import Filters from "./components/Filters";
import resultaten, { resultatenNaarTabellen, laatsteWijzigingGemaaktOp } from './resultaten';

import './print.css';

class App extends Component {
  render() {
    const data = resultatenNaarTabellen(resultaten);

    return (
      <div className="App">
        <div className="container d-print-none">
          <div className="row">
            <div className="col-12">
              <h1>Clubrecords AV Haarlem</h1>
              <hr className="my-4"/>
            </div>
          </div>
          <div className="row d-none">
            <div className="col-12">
              <Filters />
            </div>
          </div>
          <div className="row">
            <div className="col-12">&nbsp;</div>
          </div>
        </div>
        {
          data
            .map((tabel, index) =>
              <RanglijstSectie title={tabel.titel} key={index}>
                <Ranglijst rijen={tabel.rijen} />
              </RanglijstSectie>
            )
        }

        <div className="container d-print-none">
          <div className="row">
            <div className="col-12">
              <p className="lead">
                Laatste wijziging gemaakt op { laatsteWijzigingGemaaktOp.toLocaleDateString() }. Clubrecord toevoegen? <a href="https://www.avhaarlem.nl/contact/" target="_blank" rel="noopener noreferrer">Neem contact op</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
