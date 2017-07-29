import React from 'react';
import PropTypes from 'prop-types';
import SortList from '../SortList';

const SortContainer = ({ numbersToSort }) => (
  <div>
    <h3>Sorting...</h3>
    <SortList list={numbersToSort} />
  </div>
);

SortContainer.propTypes = {
  numbersToSort: PropTypes.arrayOf(PropTypes.number),
};

export default SortContainer;
