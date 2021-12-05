const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt')).toString().split(/\r\n+/);

/**
 * @link https://adventofcode.com/2021/day/2
 * @description Dive!
 */

module.exports = () => {
  const position = input.reduce(
    (position, instruction) => {
      const [direction, value] = instruction.split(' ');
      switch (direction) {
        case 'forward':
          position.depth += position.aim * Number(value);
          position.x += Number(value);
          break;
        case 'down':
          position.aim += Number(value);
          break;
        case 'up':
          position.aim -= Number(value);
          break;
        default:
          break;
      }

      return position;
    },
    { x: 0, depth: 0, aim: 0 },
  );
  return position.x * position.depth;
};
