import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getItemBackgroundColour = (n) => {
  const color = (n * 20) % 360;
  return `hsl(${color}, 40%, 50%)`;
};

const StyledItem = styled.div`
 width: 50px;
  border: solid 1px #222;
  text-align: center;
  padding: 0.8em 1em;
  margin: 0.1em;
  background-color: ${props => getItemBackgroundColour(props.item)};
  color: #fff;
`;

const SortItem = props => (
  <StyledItem {...props}>{props.item}</StyledItem>
);

SortItem.propTypes = {
  item: PropTypes.number,
};

export default SortItem;
