import React from 'react';
import PropTypes from 'prop-types';
import SortList from '../SortList';

class SortContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.numbersToSort, sorted: false };
  }

  componentDidMount() {
    this.sorted = false;
    this.interval = setInterval(this.bubbleSort, 1000);
  }

  bubbleSort = () => {
    const items = this.state.items.slice();
    let amended = false;
    for (let i = 1; i < items.length; i += 1) {
      if (items[i] < items[i - 1]) {
        const temp = items[i - 1];
        items[i - 1] = items[i];
        items[i] = temp;
        amended = true;
      }
    }

    if (!amended) {
      clearInterval(this.interval);
    }

    this.setState({ items, sorted: !amended });
  }

  render() {
    return (
      <div>
        <h3>{ this.state.sorted ? <span>Sorted!</span> : <span>Sorting...</span>}</h3>
        <SortList list={this.state.items} />
      </div>
    );
  }
}

SortContainer.propTypes = {
  numbersToSort: PropTypes.arrayOf(PropTypes.number),
};

export default SortContainer;
