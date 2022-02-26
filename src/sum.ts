export const sum = (array: Array<number | string>, initial = 0): number => {
  if (array.some(value => typeof(value) === 'string')) {
    array = array.map(Number);
  }

  return (array as number[]).reduce((accumulator, current) => accumulator + current, initial);
}
