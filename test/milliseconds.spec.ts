import { milliseconds } from '../src';

describe('Milliseconds spec', () => {
  it('Should return a promise', async () => {
    const delay = milliseconds(1000);

    expect(delay).toBeInstanceOf(Promise);
  });

  it('Should resolve after given time', async () => {
    let fulfilled = false;
    // eslint-disable-next-line no-return-assign
    milliseconds(1000).then(() => fulfilled = true);

    expect(fulfilled).toBeFalse();

    setTimeout(() => {
      expect(fulfilled).toBeTrue();
    }, 1010);
  });

  it('Should reject timeouts longer than one hour', async () => {
    try {
      milliseconds(3600001);
      fail();
    } catch (e) {
      expect((e as RangeError).message).toEqual('Can\'t wait for more than one hour (3600000ms)');
    }
  });
})
