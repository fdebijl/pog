/** Cut an array into chunks of a specified size */
export const chunk = (array: string[], chunkSize = 5): string[][] => {
  const output = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    output.push(array.slice(i, i + chunkSize));
  }

  return output;
}
