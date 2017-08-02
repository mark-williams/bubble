import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import SortItem from '../SortItem';

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SortList = ({ list }) => (
  <StyledList>
    {list.map(x => (<SortItem key={x.id} item={x.number} />))}
  </StyledList>
);

SortList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default SortList;
