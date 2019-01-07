import React, { Component } from 'react';
import FilterButton from './FilterButton';

class Filters extends Component {
  render() {
    return (
      <div className="Filters">
        <div className="d-none d-sm-block">
          <div className="btn-group btn-group-sm mr-3">
            <FilterButton type="secondary" label="vrouwen">Vrouwen</FilterButton>
            <FilterButton type="secondary" label="mannen">Mannen</FilterButton>
          </div>

          <div className="btn-group btn-group-sm mr-3">
            <FilterButton type="success" label="indoor">Indoor</FilterButton>
            <FilterButton type="success" label="outdoor">Outdoor</FilterButton>
          </div>

          <div className="btn-group btn-group-sm mt-3">
            <FilterButton type="primary" label="senioren">Senioren</FilterButton>
            <FilterButton type="primary" label="junioren-a">Junioren A</FilterButton>
            <FilterButton type="primary" label="junioren-b">Junioren B</FilterButton>
            <FilterButton type="primary" label="junioren-c">Junioren C</FilterButton>
            <FilterButton type="primary" label="junioren-d">Junioren D</FilterButton>
            <FilterButton type="primary" label="wegatletiek">Wegatletiek</FilterButton>
          </div>

        </div>

        <div className="d-sm-none">
          <div className="d-block btn-group-vertical mb-3 btn-group btn-group-sm">
            <FilterButton type="secondary" label="vrouwen">Vrouwen</FilterButton>
            <FilterButton type="secondary" label="mannen">Mannen</FilterButton>
          </div>

          <div className="d-block btn-group-vertical mb-3 btn-group btn-group-sm">
            <FilterButton type="success" label="indoor">Indoor</FilterButton>
            <FilterButton type="success" label="outdoor">Outdoor</FilterButton>
          </div>

          <div className="d-block btn-group-vertical mb-3 btn-group btn-group-sm">
            <FilterButton type="primary" label="senioren">Senioren</FilterButton>
            <FilterButton type="primary" label="junioren-a">Junioren A</FilterButton>
            <FilterButton type="primary" label="junioren-b">Junioren B</FilterButton>
            <FilterButton type="primary" label="junioren-c">Junioren C</FilterButton>
            <FilterButton type="primary" label="junioren-d">Junioren D</FilterButton>
            <FilterButton type="primary" label="wegatletiek">Wegatletiek</FilterButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
