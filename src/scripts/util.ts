export const wait = (ms: number): Promise<number> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
