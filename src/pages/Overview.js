import React, { Component } from 'react';
import Ranglijst from "../components/Ranglijst";
import RanglijstSectie from "../components/RanglijstSectie";
import Filters from "../components/Filters";
import resultaten, { resultatenNaarTabellen, laatsteWijzigingGemaaktOp } from '../resultaten/index';

class Overview extends Component {
  categoryIsSet(label) {
    const params = new URLSearchParams(this.props.location.search);
    return params.get(label) === 'true';
  }

  allCategoriesAreSet(categories) {
    return categories
      .reduce((accumulator, currentValue) =>
        accumulator !== false ?
          this.categoryIsSet(currentValue) :
          false
      , true);
  }

  atLeastOneCategoryIsSet(categories) {
    return categories
      .reduce((accumulator, currentValue) =>
          accumulator === true ?
            true :
            this.categoryIsSet(currentValue)
        , false);
  }

  render() {
    const data = resultatenNaarTabellen(resultaten);

    return (
        <div className="Overview">
          <div className="container d-print-none">
            <div className="row">
              <div className="col-12">
                <h1>Clubrecords AV Haarlem</h1>
                <hr className="my-4"/>
              </div>
            </div>
            <div className="row">
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
              .filter(tabel => {
                const { geslacht, categorie, locatie } = tabel;
                const geslachtIsSet = this.atLeastOneCategoryIsSet(['mannen', 'vrouwen']);
                const locatieIsSet = this.atLeastOneCategoryIsSet(['indoor', 'outdoor']);
                const categoryIsSet = this.atLeastOneCategoryIsSet([ 'senioren', 'junioren-a', 'junioren-b', 'junioren-c', 'junioren-d', 'lange-afstand' ]);

                const categoriesToCheck = [];
                if (geslachtIsSet) {
                  categoriesToCheck.push(geslacht);
                }

                if (locatieIsSet) {
                  categoriesToCheck.push(locatie);
                }

                if (categoryIsSet) {
                  categoriesToCheck.push(categorie);
                }

                return this.allCategoriesAreSet(categoriesToCheck);
              })
              .map((tabel, index) =>
                <RanglijstSectie title={tabel.titel} key={index}>
                  <Ranglijst rijen={tabel.rijen}/>
                </RanglijstSectie>
              )
          }

          <div className="container d-print-none">
            <div className="row">
              <div className="col-12">
                <p className="lead">
                  Laatste wijziging gemaakt op {laatsteWijzigingGemaaktOp.toLocaleDateString()}. Clubrecord
                  toevoegen? <a href="https://www.avhaarlem.nl/contact/" target="_blank" rel="noopener noreferrer">Neem
                  contact op</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Overview;
