const evenFormula = (steps, value) => [steps + 1, value / 2];
const oddFormula = (steps, value) => [steps + 1, value * 3 + 1];

const takeAStep = (steps, value) => {
  if (value === 1) return steps;
  return value % 2 === 0 ?
    takeAStep(...evenFormula(steps, value)) : takeAStep(...oddFormula(steps, value));
};

const steps = (value) => {
  if (value < 1) throw new Error('Only positive numbers are allowed');
  return takeAStep(0, value);
};

export { steps };
