import { milliseconds } from './milliseconds';

/** Wait until a variable passed as a closure becomes truthy
 *
 * @example
 * let someVariable = externalFunctionThatMayTakeAWhile();
 * await until(() => someVariable === true)
*/
export const until = (conditionFunction: () => boolean): Promise<void> => {
  const poll = (resolve: (value: void | PromiseLike<void>) => void) => {
    if (conditionFunction())
      resolve();
    else
      setTimeout(() => poll(resolve), 400);
  };

  return new Promise(poll);
};

/** Wait until a variable passed as a closure becomes truthy, or a given timeout (ms) expires, whichever comes first
 *
 * @example
 * let someVariable = externalFunctionThatMayTakeAWhile();
 * await until(() => someVariable === true, 5000)
*/
export const untilOrTimeout = async (conditionFunction: () => boolean, timeout: number): Promise<unknown> => {
  return Promise.race([until(conditionFunction), milliseconds(timeout)])
}
