import React from 'react';
import PropTypes from 'prop-types';
import { compose, lifecycle, withReducer } from 'recompose';
import styled from 'styled-components';
import SortList from '../SortList';
import bubble from '../../services/sort';

const getItems = numbers => numbers.map((n, i) => ({ id: i, number: n }));
const comparer = (a, b) => a.number > b.number;

const Status = styled.h3`
  color: #333;
  font-style: ${props => (props.isSorted ? 'italic' : 'normal')};
`;

const INITIAL = {
  items: [],
  sorted: false,
};

const INIT = 'INIT';
const SORT = 'SORT';

const sortedReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case INIT:
      return Object.assign({}, state, { items: getItems(action.items) });

    case SORT:
      return bubble(state.items.slice(), comparer);

    default:
      return state;
  }
};

const sortingViaReducer = withReducer('sortState', 'dispatch', sortedReducer);
const sortOnTimer = lifecycle({
  componentWillMount() {
    this.props.dispatch({ type: INIT, items: this.props.numbersToSort });
  },
  componentDidMount() {
    setInterval(() => {
      this.props.dispatch({ type: SORT });
    },
    100);
  },
});

const SortContainer = ({ sortState }) => {
  const message = sortState.sorted ? 'Sorted!' : 'Sorting...';
  return (
    <div>
      <Status className="sort-status">{message}</Status>
      <SortList className="sort-list" list={sortState.items} />
    </div>
  );
};

SortContainer.propTypes = {
  sortState: PropTypes.object,
};

export default compose(sortingViaReducer, sortOnTimer)(SortContainer);
