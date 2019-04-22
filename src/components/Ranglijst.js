import React, { Component } from 'react';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';

import './Ranglijst.scss';
import {
  DISCUSWERPEN,
  HINKSTAPSPRINGEN,
  HOOGSPRINGEN, KOGELSLINGEREN,
  KOGELSTOTEN,
  POLSSTOKHOOGSPRINGEN, SPEERWERPEN, TIENKAMP,
  VERSPRINGEN, ZEVENKAMP, ZWEEDSE_ESTAFETTE
} from '../constants/onderdelen';

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

    const onderdeelIsTechnischNummer = onderdeel => {
      console.log('oitn: ', onderdeel);

      return onderdeel === HOOGSPRINGEN ||
        onderdeel === POLSSTOKHOOGSPRINGEN ||
        onderdeel === VERSPRINGEN ||
        onderdeel === HINKSTAPSPRINGEN ||
        onderdeel === KOGELSTOTEN ||
        onderdeel === DISCUSWERPEN ||
        onderdeel === KOGELSLINGEREN ||
        onderdeel === SPEERWERPEN ||
        onderdeel === ZWEEDSE_ESTAFETTE ||
        onderdeel === TIENKAMP ||
        onderdeel === ZEVENKAMP
    }

    const renderTabelVoorMeerkampPrestatie = (prestatie, amountOfColumns = 1) =>
      <table className="MeerkampPrestatie table table-sm table-borderless">
        <tbody>
        {
          chunk(
            Object
              .keys(prestatie)
              .filter(key => prestatie[key].onderdeel !== 'Totaal')
              .map(index => prestatie[index]),
            amountOfColumns
          )
            .map((twoPrestaties, index) => {
              const [prestatieA, prestatieB] = twoPrestaties;

              return (
                <tr key={index}>
                  <td className="text-lg-left">{ prestatieA.onderdeel }</td>
                  <td className="text-lg-right">{ prestatieA.prestatie }</td>
                  {
                    amountOfColumns !== 1 ?
                      <React.Fragment>
                        <td>&nbsp;&nbsp;</td>
                        <td className="text-left">{ prestatieB ? prestatieB.onderdeel : '' }</td>
                        <td className="text-right">{ prestatieB ? prestatieB.prestatie : '' }</td>
                      </React.Fragment> : null
                  }
                </tr>
              )
            })
        }
        </tbody>
      </table>;

    const renderTotaalPuntenaantalVoorMeerkampPrestatie = prestatie =>
      Object
        .keys(prestatie)
        .filter(key => prestatie[key].onderdeel === 'Totaal')
        .map(key => prestatie[key])
        .reduce((acc, currentValue) => currentValue.punten, '?');

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
                <td className={`text-nowrap text-right text-lg-left ${onderdeelIsTechnischNummer(rij.onderdeel) ? 'TechnischNummerCell' : ''}`}>{ rij.onderdeel }</td>
                <td className={`text-right text-lg-left ${prestatieIsMeerkamp(rij.prestatie) ? 'MeerkampCell' : ''}`}>
                  { renderNaam(rij.naam) }
                  {
                    prestatieIsMeerkamp(rij.prestatie) ?
                      <React.Fragment>
                        <hr />
                        { renderTabelVoorMeerkampPrestatie(rij.prestatie) }
                      </React.Fragment> : null
                  }
                </td>
                <td className={`text-nowrap text-right`}>
                  {
                    prestatieIsMeerkamp(rij.prestatie) ?
                      renderTotaalPuntenaantalVoorMeerkampPrestatie(rij.prestatie) :
                      rij.prestatie
                  }
                  &nbsp;
                </td>
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
