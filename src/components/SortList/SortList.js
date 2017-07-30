import React from 'react';
import PropTypes from 'prop-types';
import SortItem from '../SortItem';

const SortList = ({ list }) => (
  <div className="sortList">
    {list.map(x => (<SortItem key={x.id} item={x.number} />))}
  </div>
);

SortList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default SortList;
