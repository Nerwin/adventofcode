const input = require('./input.json');

/**
 * @link https://adventofcode.com/2020/day/3
 * @description What do you get if you multiply together the number of trees encountered on each of the listed slopes?
 */

const slopesSpeed = [
  { x: 1, y: 1 },
  { x: 3, y: 1 },
  { x: 5, y: 1 },
  { x: 7, y: 1 },
  { x: 1, y: 2 },
];

module.exports = () => {
  const result = slopesSpeed.reduce((accumulator, slopeSpeed) => {
    const totalTrees = input.filter((line, index) => {
      if (index % slopeSpeed.y !== 0) {
        return false;
      }

      const currentXPosition = (index * slopeSpeed.x) / slopeSpeed.y;

      return line.charAt(currentXPosition % line.length) === '#';
    }).length;

    return accumulator * totalTrees;
  }, 1);

  return result;
};
