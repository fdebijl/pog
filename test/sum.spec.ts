import { sum } from '../src';

describe('Sum spec', () => {
  it('Should sum a simple array', () => {
    expect(sum([1, 2, 3])).toEqual(6);
  });

  it('Should sum 2^16 array', () => {
    const largeArrayLength = Math.pow(2, 16) - 1;

    expect(sum(new Array(largeArrayLength).fill(1))).toEqual(largeArrayLength);
  });

  it('Should sum 2^24 array', () => {
    const largeArrayLength = Math.pow(2, 24) - 1;

    expect(sum(new Array(largeArrayLength).fill(2))).toEqual(largeArrayLength * 2);
  });

  it('Should convert strings to number', () => {
    expect(sum(['1', '2', '3'])).toEqual(6);
  });

  it('Should sum mixed string/number array', () => {
    expect(sum(['1', 2, '3'])).toEqual(6);
  });

  it('Should sum infinite values', () => {
    expect(sum([Infinity, Infinity, Infinity, Infinity])).toEqual(Infinity);
  });

  it('Shouldn\'t sum NaN values', () => {
    expect(sum([NaN, 1, 2, 3])).toEqual(NaN);
  });
})
