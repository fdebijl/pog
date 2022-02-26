
export const seconds = (s: number): Promise<undefined> => new Promise(resolve => setTimeout(resolve, s * 1000));
