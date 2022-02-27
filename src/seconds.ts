
export const seconds = (s: number): Promise<undefined> => {
  if (s > 86400000) throw new RangeError('Can\'t wait for more than 24 hours (86400000ms)');
  return new Promise(resolve => setTimeout(resolve, s * 1000));
}
