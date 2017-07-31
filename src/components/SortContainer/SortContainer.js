import React from 'react';
import PropTypes from 'prop-types';
import SortList from '../SortList';
import bubble from '../../services/sort';

const getItems = numbers => numbers.map((n, i) => ({ id: i, number: n }));

const comparer = (a, b) => a.number > b.number;

class SortContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: getItems(this.props.numbersToSort), sorted: false };
  }

  componentDidMount() {
    this.sorted = false;
    this.interval = setInterval(this.sort, 200);
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
    return (
      <div>
        <h3 className="sort-status">{ this.state.sorted ? <span>Sorted!</span> : <span>Sorting...</span>}</h3>
        <SortList list={this.state.items} />
      </div>
    );
  }
}

SortContainer.propTypes = {
  numbersToSort: PropTypes.arrayOf(PropTypes.number),
};

export default SortContainer;
