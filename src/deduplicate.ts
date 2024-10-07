/** Deduplicate an array on a given key */
export function deduplicate<T>(array: T[], key: keyof T): T[] {
  return array.filter((value, index, self) => self.findIndex(item => item[key] === value[key]) === index);
}
