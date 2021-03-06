import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class FilterButton extends Component {
  constructor() {
    super(...arguments);
    this.onFilterClicked = this.onFilterClicked.bind(this);
  }

  onFilterClicked(label) {
    this.toggleQueryParam(label);
  }

  toggleQueryParam(label) {
    const { search } = this.props.location;

    const params = new URLSearchParams(search);
    const isSet = params.get(label) === 'true';

    if (isSet) {
      params.delete(label);
    } else {
      params.append(label, true);
    }

    this.props.history.push(`?${params.toString()}`);
  }

  categoryIsActive(label) {
    const { search } = this.props.location;

    const params = new URLSearchParams(search);
    return params.get(label) === 'true';
  }

  render() {
    const { label, type } = this.props;
    const activeClass = this.categoryIsActive(label) ? 'active' : '';
    return (
      <button type="button"
              className={`FilterButton btn btn-outline-${type} ${activeClass}`}
              onClick={() => this.onFilterClicked(label)}>
        {this.props.children}
      </button>
    );
  }
}

export default withRouter(FilterButton);
