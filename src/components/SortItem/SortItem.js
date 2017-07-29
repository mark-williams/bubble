import React from 'react';
import PropTypes from 'prop-types';

const getItemStyle = (item) => {
  const color = (item * 20) % 360;
  return {
    backgroundColor: `hsl(${color}, 40%, 50%)`,
  };
};

const SortItem = ({ item }) => (
  <div className="sortItem" style={getItemStyle(item)}>{item}</div>
);

SortItem.propTypes = {
  item: PropTypes.number,
};

export default SortItem;
