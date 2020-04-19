export const getRounded = (numberString) =>
  Math.round((parseFloat(numberString) + Number.EPSILON) * 100) / 100;
