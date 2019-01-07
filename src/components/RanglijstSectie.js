import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RanglijstSectie extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="RanglijstSectie container">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-3">{ title }</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            { children }
          </div>
        </div>
      </div>
    )
  }
}

RanglijstSectie.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default RanglijstSectie;
