import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ranglijst extends Component {
  static defaultProps = {
    rijen: []
  }

  render() {
    const { rijen } = this.props;

    return (
      <table className="Ranglijst table table-striped">
        <thead>
          <tr>
            <th>Naam</th>
            <th>Onderdeel</th>
            <th>Categorie</th>
            <th>Prestatie</th>
            <th>Plaats</th>
            <th>Datum</th>
          </tr>
        </thead>
        <tbody>
        {
          rijen
            .map((rij, index) => (
              <tr key={index}>
                <td>{ rij.naam }</td>
                <td>{ rij.onderdeel }</td>
                <td>{ rij.categorie }</td>
                <td>{ rij.prestatie }</td>
                <td>{ rij.plaats }</td>
                <td>{ rij.datum.toLocaleDateString() }</td>
              </tr>
            ))
        }
        </tbody>
      </table>
    );
  }
}

Ranglijst.propTypes = {
  rijen: PropTypes.arrayOf(
    PropTypes.shape({
      naam: PropTypes.string.isRequired,
      onderdeel: PropTypes.string.isRequired,
      categorie: PropTypes.string.isRequired,
      prestatie: PropTypes.string.isRequired,
      plaats: PropTypes.string.isRequired,
      datum: PropTypes.instanceOf(Date).isRequired
    }).isRequired
  ).isRequired
};


export default Ranglijst;
