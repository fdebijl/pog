export const milliseconds = (s: number): Promise<undefined> => new Promise(resolve => setTimeout(resolve, s));
