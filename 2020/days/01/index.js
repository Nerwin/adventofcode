const input = require('./input.json');

/**
 * @link https://adventofcode.com/2020/day/1
 * @description Find the tow/three/four entries that sum to 2020; what do you get if you multiply them together?
 */

module.exports = () => {
  const entriesCount = 3; // Change this for 2/3/4
  const subset = subSetSum(input, 2020, entriesCount);
  const result = subset.reduce((a, b) => a * b);

  return result;
};

function subSetSum(input, target, entriesCount, subset = []) {
  const sum = subset.reduce((a, b) => a + b, 0);

  if (sum > target || subset.length > entriesCount) return null;

  if (sum === target && subset.length == entriesCount) {
    // console.log(`${subset.join(' + ')} = ${target}`);
    return subset;
  }

  for (let index = 0; index < input.length; index++) {
    const value = input[index];
    const remaining = input.slice(index + 1);
    const result = subSetSum(remaining, target, entriesCount, subset.concat([value]));
    if (result) return result;
  }
}
