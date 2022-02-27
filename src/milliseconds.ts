export const milliseconds = (s: number): Promise<undefined> => {
  if (s > 3600000) throw new RangeError('Can\'t wait for more than one hour (3600000ms)');
  return new Promise(resolve => setTimeout(resolve, s));
}
