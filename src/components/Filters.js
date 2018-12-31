import React, { Component } from 'react';
import FilterButton from './FilterButton';

class Filters extends Component {
  render() {
    return (
      <div className="Filters">
        <div className="btn-group btn-group-sm mr-3">
          <FilterButton type="secondary" label="vrouwen">Vrouwen</FilterButton>
          <FilterButton type="secondary" label="mannen">Mannen</FilterButton>
        </div>

        <div className="btn-group btn-group-sm mr-3">
          <FilterButton type="success" label="indoor">Indoor</FilterButton>
          <FilterButton type="success" label="outdoor">Outdoor</FilterButton>
        </div>

        <div className="btn-group btn-group-sm" role="group" aria-label="Third group">
          <FilterButton type="primary" label="senioren">Senioren</FilterButton>
          <FilterButton type="primary" label="junioren-a">Junioren A</FilterButton>
          <FilterButton type="primary" label="junioren-b">Junioren B</FilterButton>
          <FilterButton type="primary" label="junioren-c">Junioren C</FilterButton>
          <FilterButton type="primary" label="junioren-d">Junioren D</FilterButton>
          <FilterButton type="primary" label="wegatletiek">Wegatletiek</FilterButton>
        </div>
      </div>
    );
  }
}

export default Filters;
