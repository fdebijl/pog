/** Cut an array into chunks of a specified size */
export const chunk = <T>(array: T[], chunkSize = 5): T[][] => {
  const output = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    output.push(array.slice(i, i + chunkSize));
  }

  return output;
}
