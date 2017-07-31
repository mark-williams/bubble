import React from 'react';
import { mount, shallow } from 'enzyme';
import SortContainer from './SortContainer';
import SortList from '../SortList';

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

  describe('sort list', () => {
    it('renders SortList component passing correct props', () => {
      const testList = [2, 1];
      const expectedProps = {
        list: [
          { id: 0, number: 2 },
          { id: 1, number: 1 },
        ],
      };
      const wrapper = shallow(
        <SortContainer numbersToSort={testList} />,
      );

      expect(wrapper.children().at(1).type()).toBe(SortList);
      expect(wrapper.children().at(1).props()).toEqual(expectedProps);
    });
  });
});
