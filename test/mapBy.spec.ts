import { mapBy } from '../src/mapBy';

describe('mapBy', () => {
  it('should map an array of objects by a given key', () => {
    const array = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];
    const result = mapBy(array, 'name');

    expect(result).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  it('should return an empty array when given an empty array', () => {
    const array: { id: number, name: string }[] = [];
    const result = mapBy(array, 'name');

    expect(result).toEqual([]);
  });

  it('should map an array of objects by a numeric key', () => {
    const array = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 }
    ];
    const result = mapBy(array, 'value');

    expect(result).toEqual([10, 20, 30]);
  });

  it('should handle arrays with missing keys gracefully', () => {
    const array = [
      { id: 1, name: 'Alice' },
      { id: 2 },
      { id: 3, name: 'Charlie' }
    ];
    const result = mapBy(array, 'name');

    expect(result).toEqual(['Alice', undefined, 'Charlie']);
  });

  it('should map an array of objects by a boolean key', () => {
    const array = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true }
    ];
    const result = mapBy(array, 'active');

    expect(result).toEqual([true, false, true]);
  });
});
