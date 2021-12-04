const input = require('./input.json');

/**
 * @link https://adventofcode.com/2021/day/1
 * @description
 */

module.exports = () => {
  let result = 0;
  input.reduce((acc, curr, index) => {
    if (index === 0) return [curr];
    if (index === 1) return [acc[0] + curr, curr];
    if (index === 2) return [acc[0] + curr, acc[1] + curr, curr];

    acc[1] += curr;
    acc[2] += curr;
    if (acc[1] > acc[0]) result++;

    acc[0] = acc[1];
    acc[1] = acc[2];
    acc[2] = curr;
    return acc;
  }, []);
  return result;
};
