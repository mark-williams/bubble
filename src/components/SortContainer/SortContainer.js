import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SortList from '../SortList';
import bubble from '../../services/sort';

const getItems = numbers => numbers.map((n, i) => ({ id: i, number: n }));
const comparer = (a, b) => a.number > b.number;

const Status = styled.h3`
  color: #333;
  font-style: ${props => (props.isSorted ? 'italic' : 'normal')};
`;

class SortContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: getItems(this.props.numbersToSort), sorted: false };
  }

  componentDidMount() {
    this.sorted = false;
    this.interval = setInterval(this.sort, 180);
  }

  sort = () => {
    const items = this.state.items.slice();
    const results = bubble(items, comparer);
    if (results.sorted) {
      clearInterval(this.interval);
    }

    this.setState(results);
  }

  render() {
    const message = this.state.sorted ? <span>Sorted!</span> : <span>Sorting...</span>;
    return (
      <div>
        <Status isSorted={this.state.sorted} className="sort-status">{message}</Status>
        <SortList list={this.state.items} />
      </div>
    );
  }
}

SortContainer.propTypes = {
  numbersToSort: PropTypes.arrayOf(PropTypes.number),
};

export default SortContainer;
