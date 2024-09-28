export const createArray = (points: number) => {
  return Array.from({ length: points }, (_, index) => index + 1);
};
