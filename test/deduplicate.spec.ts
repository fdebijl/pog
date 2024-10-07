import { deduplicate } from '../src/deduplicate';

describe('deduplicate', () => {
  it('should remove duplicate objects based on a key', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Alice' }
    ];
    const output = deduplicate(input, 'id');

    expect(output).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]);
  });

  it('should return an empty array when input is empty', () => {
    const input: { id: number, name: string }[] = [];
    const output = deduplicate(input, 'id');

    expect(output).toEqual([]);
  });

  it('should handle arrays with no duplicates', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];
    const output = deduplicate(input, 'id');

    expect(output).toEqual(input);
  });

  it('should handle arrays with multiple duplicates', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];
    const output = deduplicate(input, 'id');

    expect(output).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ]);
  });

  it('should deduplicate based on a different key', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Bob' }
    ];
    const output = deduplicate(input, 'name');

    expect(output).toEqual([
      { id: 1, name: 'Alice' },
      { id: 3, name: 'Bob' }
    ]);
  });
});
