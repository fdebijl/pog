/** Execute a predicate over an array of element sequentially, with a given interval between predicate executions */
export const sequentially = <In, Out> (
  predicate: (element: In) => Promise<Out>,
  elements: In[],
  interval: number
): Promise<Out[]> => {
  return new Promise((resolve) => {
    let i = 0;
    const limit = elements.length
    const out: Out[] = [];
    const nextElement = async () => {
      out.push(await predicate(elements[i]));
      i++;
      if (i < limit) {
        setTimeout(() => {
          nextElement();
        }, interval);
      } else {
        resolve(out);
      }
    }

    nextElement();
  });
}
