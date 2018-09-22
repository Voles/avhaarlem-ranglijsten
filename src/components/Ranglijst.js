import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ranglijst extends Component {
  static defaultProps = {
    rijen: []
  }

  render() {
    const { rijen } = this.props;

    return (
      <table className="Ranglijst table table-striped table-responsive-md">
        <thead className="thead-dark">
          <tr>
            <th>Onderdeel</th>
            <th>Naam</th>
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
                <td className="text-nowrap">{ rij.onderdeel }</td>
                <td className="text-nowrap">{ rij.naam }</td>
                <td className="text-nowrap">{ rij.prestatie }</td>
                <td className="text-nowrap">{ rij.plaats }</td>
                <td className="text-nowrap">{ rij.datum.toLocaleDateString() }</td>
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
