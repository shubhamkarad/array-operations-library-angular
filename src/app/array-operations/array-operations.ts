export class ArrayOperations {
  // Generic filter method | Pass 2 args | eg: ArrayOperations.filter([2,3,4,5,6], isEven).
  static filter<T>(array: T[], predicate: (value: T) => boolean): T[] {
    const result: T[] = [];
    for (const value of array) {
      if (predicate(value)) {
        result.push(value);
      }
    }
    return result;
  }

  static map<T, U>(array: T[], transform: (value: T) => U): U[] {
    const result: U[] = [];
    for (const value of array) {
      result.push(transform(value));
    }
    return result;
  }

  static reduce<T, U>(
    array: T[],
    reducer: (accumulator: U, value: T) => U,
    initialValue: U
  ): U {
    let accumulator: U = initialValue;
    for (const value of array) {
      accumulator = reducer(accumulator, value);
    }
    return accumulator;
  }

  static chunk<T>(array: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  static flatten<T>(nestedArray: T[][]): T[] {
    const result: T[] = [];
    for (const array of nestedArray) {
      result.push(...array);
    }
    return result;
  }

  static unique<T>(array: T[]): T[] {
    const seen: Set<T> = new Set();
    const result: T[] = [];
    for (const value of array) {
      if (!seen.has(value)) {
        seen.add(value);
        result.push(value);
      }
    }
    return result;
  }

  static intersection<T>(array1: T[], array2: T[]): T[] {
    const set2: Set<T> = new Set(array2);
    return ArrayOperations.filter(array1, (value) => set2.has(value));
  }

  static union<T>(array1: T[], array2: T[]): T[] {
    const combined: T[] = [...array1, ...array2];
    return ArrayOperations.unique(combined);
  }
}
