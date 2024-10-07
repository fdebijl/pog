/** Map an array by a given key */
export const mapBy = <T, K extends keyof T>(array: T[], key: K): T[K][] => {
  return array.map((item) => item[key]);
};
