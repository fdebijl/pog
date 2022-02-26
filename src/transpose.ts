/**
 * Swap the row and columns of array
 *
 * @example
 * const matrix = [
 *  [ 1, 2, 3 ],
 *  [ 1, 2, 3 ],
 *  [ 1, 2, 3 ]
 * ]
 *
 * console.log(transpose(matrix));
 * // [
 * //  [ 1, 1, 1 ],
 * //  [ 2, 2, 2 ],
 * //  [ 3, 3, 3 ]
 * // ]
*/
export const transpose = <T>(matrix: T[][]): T[][] => {
  return matrix[0].map((col, i) => matrix.map(row => row[i]));
}
