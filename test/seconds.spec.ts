import { seconds } from '../src';

describe('Seconds spec', () => {
  it('Should return a promise', async () => {
    const delay = seconds(1);

    expect(delay).toBeInstanceOf(Promise);
  });

  it('Should resolve after given time', async () => {
    let fulfilled = false;
    // eslint-disable-next-line no-return-assign
    seconds(1).then(() => fulfilled = true);

    expect(fulfilled).toBeFalse();

    setTimeout(() => {
      expect(fulfilled).toBeTrue();
    }, 1100);
  });

  it('Should reject timeouts longer than one hour', async () => {
    try {
      seconds(86400001);
      fail();
    } catch (e) {
      expect((e as RangeError).message).toEqual('Can\'t wait for more than 24 hours (86400000ms)');
    }
  });
})
