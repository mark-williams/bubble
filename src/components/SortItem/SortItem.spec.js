import React from 'react';
import renderer from 'react-test-renderer';
import SortItem from './SortItem';

describe('SortItem', () => {
  it('snapshot', () => {
    const tree = renderer.create(
      <SortItem item={171} />,
    );
    expect(tree).toMatchSnapshot();
  });
});
