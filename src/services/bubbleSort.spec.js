import { bubble, sort } from './bubbleSort';
import deepFreeze from 'deep-freeze';

const compare = (a, b) => a > b;

describe('bubble sort', () => {
  describe('single iteration', () => {
    it('swaps adjacent elements - [3,2,1]', () => {
      const unsorted = [3, 2, 1];
      const results = bubble(unsorted, compare);

      expect(results.items).toEqual([2, 1, 3]);
    });

    it('swaps adjacent elements - [2,3,1]', () => {
      const unsorted = [2, 3, 1];
      const results = bubble(unsorted, compare);

      expect(results.items).toEqual([2, 1, 3]);
    });

    it('flags results as unsorted if any swaps made', () => {
      const unsorted = [3, 2, 1];
      const results = bubble(unsorted, compare);

      expect(results.sorted).toBe(false);
    });

    it('flags results as sorted if no swaps made', () => {
      const unsorted = [1, 2, 3];
      const results = bubble(unsorted, compare);

      expect(results.sorted).toBe(true);
    });
  });

  describe('full iteration to fully sorted', () => {
    it('sorts a list', () => {
      const unsorted = [8, 2, 4, 2, 7, 6, 3, 5];
      const results = sort(unsorted, compare);

      expect(results).toEqual(unsorted.sort(compare));
    });

    it('does not change an unsorted list', () => {
      const unsorted = [100, 105, 110];
      const results = sort(unsorted, compare);

      expect(results).toEqual(unsorted);
    });

    it('does not mutate original list', () => {
      const unsorted = [8, 5, 9];
      deepFreeze(unsorted);
      const results = sort(unsorted, compare);

      expect(results).toEqual([5, 8, 9]);
    });
  });
});

