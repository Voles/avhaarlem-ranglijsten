import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ranglijst extends Component {
  static defaultProps = {
    rijen: []
  }

  render() {
    const { rijen } = this.props;

    const renderNaam = naam =>
      Array.isArray(naam) ?
        naam
          .map((naam, index) => <span className="text-nowrap" key={index}>{ naam }</span>)
          // reduce via https://stackoverflow.com/a/44738250
          .reduce((acc, x) => acc === null ? [x] : [acc, ', ', x], null):
        <span className="text-nowrap">{ naam }</span>;

    const prestatieIsMeerkamp = prestatie =>
      typeof prestatie !== 'string';

    const renderPrestatie = prestatie =>
        prestatieIsMeerkamp(prestatie) ?
        <table className="table table-sm table-borderless">
        <tbody>
          {
            Object
              .keys(prestatie)
              .map((key, index) => {
                return (
                  <tr key={index}>
                    <td>{ prestatie[key].onderdeel }</td>
                    <td>{ prestatie[key].prestatie }</td>
                    <td>{ prestatie[key].punten }</td>
                  </tr>
                )
              })
          }
        </tbody>
        </table> : prestatie;

    const renderDatum = datum =>
        typeof datum === 'object' ?
          datum.toLocaleDateString() : datum;

    return (
      <table className="Ranglijst table table-sm table-striped table-responsive-md">
        <thead className="thead-dark">
          <tr>
            <th>Onderdeel</th>
            <th>Naam</th>
            <th className="text-right">Prestatie</th>
            <th className="text-right">Plaats</th>
            <th className="text-right">Datum</th>
          </tr>
        </thead>
        <tbody>
        {
          rijen
            .map((rij, index) => (
              <tr key={index}>
                <td className="text-nowrap">{ rij.onderdeel }</td>
                <td>
                  { renderNaam(rij.naam) }
                </td>
                <td className="text-nowrap text-right">{ renderPrestatie(rij.prestatie) }</td>
                <td className="text-nowrap text-right">{ rij.plaats }</td>
                <td className="text-nowrap text-right">{ renderDatum(rij.datum) }</td>
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
      naam: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.arrayOf(
          PropTypes.string.isRequired
        )
      ]).isRequired,
      onderdeel: PropTypes.string.isRequired,
      categorie: PropTypes.string.isRequired,
      prestatie: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.arrayOf(
          PropTypes.shape({
            onderdeel: PropTypes.string.isRequired,
            prestatie: PropTypes.string.isRequired,
            punten: PropTypes.string.isRequired
          }).isRequired
        )
      ]).isRequired,
      plaats: PropTypes.string.isRequired,
      datum: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.instanceOf(Date).isRequired
      ]).isRequired
    }).isRequired
  ).isRequired
};

export default Ranglijst;
