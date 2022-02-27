import { chunk } from '../src';

describe('Chunk spec', () => {
  it('Should chunk number array', () => {
    const actual = chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
    const expected = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];

    expect(actual).toEqual(expected);
  });

  it('Should chunk mixed array', () => {
    const actual = chunk([1, 2, '3', 4, 5, '6', 7, 8, 9, 10], 5);
    const expected = [[1, 2, '3', 4, 5], ['6', 7, 8, 9, 10]];

    expect(actual).toEqual(expected);
  });
})
