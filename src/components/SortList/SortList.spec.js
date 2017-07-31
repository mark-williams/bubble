import React from 'react';
import renderer from 'react-test-renderer';
import SortList from './SortList';

const testItems = [
  { id: 1000, number: 71 },
];

describe('SortList', () => {
  it('snapshot', () => {
    const tree = renderer.create(
      <SortList list={testItems} />,
    );
    expect(tree).toMatchSnapshot();
  });
});
