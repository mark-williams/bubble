import React from 'react';
import { mount } from 'enzyme';
import SortContainer from './SortContainer';

describe('SortContainer', () => {
  jest.useFakeTimers();

  describe('status rendering', () => {
    it('initial status should be \'Sorting...\'', () => {
      const wrapper = mount(
        <SortContainer numbersToSort={[3, 2, 1]} />,
      );

      expect(wrapper.find('.sort-status').text()).toBe('Sorting...');
    });

    it('display \'Sorted\' when finished sorting', () => {
      const wrapper = mount(
        <SortContainer numbersToSort={[3, 2, 1]} />,
      );

      // Set state to'sorted'
      wrapper.setState({ sorted: true });
      expect(wrapper.find('.sort-status').text()).toBe('Sorted!');
    });
  });
});
