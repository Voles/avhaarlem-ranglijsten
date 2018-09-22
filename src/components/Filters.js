import React, { Component } from 'react';

class Filters extends Component {
  render() {
    return (
      <div className="Filters">
        <div className="btn-group btn-group-sm mr-3">
          <button type="button" className="btn btn-outline-secondary">Vrouwen</button>
          <button type="button" className="btn btn-outline-secondary">Mannen</button>
        </div>

        <div className="btn-group btn-group-sm mr-3">
          <button type="button" className="btn btn-outline-success">Indoor</button>
          <button type="button" className="btn btn-outline-success">Outdoor</button>
        </div>

        <div className="btn-group btn-group-sm" role="group" aria-label="Third group">
          <button type="button" className="btn btn-outline-primary">Senioren</button>
          <button type="button" className="btn btn-outline-primary">Junioren A</button>
          <button type="button" className="btn btn-outline-primary">Junioren B</button>
          <button type="button" className="btn btn-outline-primary">Junioren C</button>
          <button type="button" className="btn btn-outline-primary">Junioren D</button>
          <button type="button" className="btn btn-outline-primary">Lange-afstand</button>
        </div>
      </div>
    );
  }
}

export default Filters;
