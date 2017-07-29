import React from 'react';
import PropTypes from 'prop-types';

const SortList = ({ list }) => (
  <div className="sortList">
    {list.map(n => <div className="sortItem">{n}</div>)}
  </div>
);

SortList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default SortList;
