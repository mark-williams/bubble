import React from 'react';
import PropTypes from 'prop-types';
import SortItem from '../SortItem';

const SortList = ({ list }) => (
  <div className="sortList">
    {list.map((n, i) => <SortItem key={i} item={n} />)}
  </div>
);

SortList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.number),
};

export default SortList;
