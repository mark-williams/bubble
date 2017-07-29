import React from 'react';
import PropTypes from 'prop-types';
import SortList from '../SortList';

class SortContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.numbersToSort };
  }

  render() {
    return (
      <div>
        <h3>Sorting...</h3>
        <SortList list={this.state.items} />
      </div>
    );
  }
}

SortContainer.propTypes = {
  numbersToSort: PropTypes.arrayOf(PropTypes.number),
};

export default SortContainer;
