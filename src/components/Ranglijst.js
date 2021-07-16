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
import {Link} from "react-router-dom";
import {ONDERDELEN_ZONDER_ONDERSTEUNING_VOOR_HISTORIE} from "../resultaten";

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

    const onderdeelIsTechnischNummer = onderdeel =>
      onderdeel === HOOGSPRINGEN ||
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
                  <td className="text-lg-start">{ prestatieA.onderdeel }</td>
                  <td className="text-lg-end">{ prestatieA.prestatie }</td>
                  {
                    amountOfColumns !== 1 ?
                      <React.Fragment>
                        <td>&nbsp;&nbsp;</td>
                        <td className="text-start">{ prestatieB ? prestatieB.onderdeel : '' }</td>
                        <td className="text-end">{ prestatieB ? prestatieB.prestatie : '' }</td>
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
      <table className="Ranglijst table table table-striped table-responsive-md">
        <thead className="table">
          <tr>
            <th>Onderdeel</th>
            <th>Naam</th>
            <th className="text-end">Prestatie</th>
            <th className="text-end">Plaats</th>
            <th className="text-end">Datum</th>
          </tr>
        </thead>
        <tbody>
        {
          rijen
            .map((rij, index) => (
              <tr key={index}>
                <td className={`text-nowrap text-end text-lg-start ${onderdeelIsTechnischNummer(rij.onderdeel) ? 'TechnischNummerCell' : ''}`}>
                  {
                    ONDERDELEN_ZONDER_ONDERSTEUNING_VOOR_HISTORIE.includes(rij.onderdeel) ?
                      rij.onderdeel :
                      <Link to={`/historie?geslacht=${rij.geslacht.toLowerCase()}&categorie=${rij.categorie.toLowerCase().replace(' ', '-')}&locatie=${rij.locatie.toLowerCase()}&onderdeel=${rij.onderdeel.toLowerCase().replace(' ', '-')}`}>{ rij.onderdeel }</Link>
                  }
                </td>
                <td className={`text-end text-lg-start ${prestatieIsMeerkamp(rij.prestatie) ? 'MeerkampCell' : ''}`}>
                  { renderNaam(rij.naam) }
                  {
                    prestatieIsMeerkamp(rij.prestatie) ?
                      <React.Fragment>
                        <hr />
                        { renderTabelVoorMeerkampPrestatie(rij.prestatie) }
                      </React.Fragment> : null
                  }
                </td>
                <td className={`text-nowrap text-end`}>
                  {
                    prestatieIsMeerkamp(rij.prestatie) ?
                      renderTotaalPuntenaantalVoorMeerkampPrestatie(rij.prestatie) :
                      rij.handtijd ?
                        `${rij.prestatie} (${rij.handtijd})` :
                        rij.prestatie
                  }
                  &nbsp;
                </td>
                <td className="text-nowrap textstart">{ rij.plaats }</td>
                <td className="text-nowrap text-end">{ renderDatum(rij.datum) }</td>
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
