import { ArrayOperations } from './array-operations';

describe('ArrayOperations', () => {
  describe('filter', () => {
    it('should filter elements based on the predicate function', () => {
      const numbers = [1, 2, 3, 4, 5];
      const isEven = (n: number) => n % 2 === 0;
      const result = ArrayOperations.filter(numbers, isEven);
      expect(result).toEqual([2, 4]);
    });

    it('should return an empty array if no elements satisfy the predicate', () => {
      const numbers = [1, 3, 5];
      const isEven = (n: number) => n % 2 === 0;
      const result = ArrayOperations.filter(numbers, isEven);
      expect(result).toEqual([]);
    });
  });

  describe('map', () => {
    it('should transform each element using the transformation function', () => {
      const numbers = [1, 2, 3];
      const square = (n: number) => n * n;
      const result = ArrayOperations.map(numbers, square);
      expect(result).toEqual([1, 4, 9]);
    });

    it('should allow input and output types to differ', () => {
      const numbers = [1, 2, 3];
      const toString = (n: number) => `Number: ${n}`;
      const result = ArrayOperations.map(numbers, toString);
      expect(result).toEqual(['Number: 1', 'Number: 2', 'Number: 3']);
    });
  });

  describe('reduce', () => {
    it('should accumulate a single result using the reducer function', () => {
      const numbers = [1, 2, 3, 4];
      const sum = (acc: number, n: number) => acc + n;
      const result = ArrayOperations.reduce(numbers, sum, 0);
      expect(result).toBe(10);
    });

    it('should work with different accumulator and value types', () => {
      const strings = ['a', 'b', 'c'];
      const concat = (acc: string, s: string) => acc + s;
      const result = ArrayOperations.reduce(strings, concat, '');
      expect(result).toBe('abc');
    });
  });

  describe('chunk', () => {
    it('should split an array into chunks of specified size', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = ArrayOperations.chunk(numbers, 2);
      expect(result).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('should return the original array if the size is larger than the array length', () => {
      const numbers = [1, 2, 3];
      const result = ArrayOperations.chunk(numbers, 5);
      expect(result).toEqual([[1, 2, 3]]);
    });
  });

  describe('flatten', () => {
    it('should flatten a nested array into a single-level array', () => {
      const nestedArray = [[1, 2], [3, 4], [5]];
      const result = ArrayOperations.flatten(nestedArray);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle empty nested arrays', () => {
      const nestedArray: number[][] = [];
      const result = ArrayOperations.flatten(nestedArray);
      expect(result).toEqual([]);
    });
  });

  describe('unique', () => {
    it('should remove duplicate elements from an array', () => {
      const numbers = [1, 2, 2, 3, 4, 4, 5];
      const result = ArrayOperations.unique(numbers);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array if the input array is empty', () => {
      const numbers: number[] = [];
      const result = ArrayOperations.unique(numbers);
      expect(result).toEqual([]);
    });
  });

  describe('intersection', () => {
    it('should return an array with common elements from both arrays', () => {
      const array1 = [1, 2, 3, 4];
      const array2 = [3, 4, 5, 6];
      const result = ArrayOperations.intersection(array1, array2);
      expect(result).toEqual([3, 4]);
    });

    it('should return an empty array if there are no common elements', () => {
      const array1 = [1, 2];
      const array2 = [3, 4];
      const result = ArrayOperations.intersection(array1, array2);
      expect(result).toEqual([]);
    });
  });

  describe('union', () => {
    it('should return an array with all unique elements from both arrays', () => {
      const array1 = [1, 2, 3];
      const array2 = [3, 4, 5];
      const result = ArrayOperations.union(array1, array2);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle arrays with no duplicates', () => {
      const array1 = [1, 2, 3];
      const array2 = [4, 5, 6];
      const result = ArrayOperations.union(array1, array2);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
