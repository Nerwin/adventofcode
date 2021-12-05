const input = require('./input.json');

/**
 * @link https://adventofcode.com/2020/day/5
 * @description As a sanity check, look through your list of boarding passes. What is the highest seat ID on a boarding pass? And what is the ID of your seat?
 */

const plane = { minRowNumber: 0, maxRowNumber: 127, minColumnNumber: 0, maxColumnNumber: 7 };

const getLowerHalf = (min, max) => Math.floor(min + ((max - min) / 2));
const getUpperHalf = (min, max) => {
  if (min === 0) {
    return Math.round(max / 2);
  }

  return Math.round(min + ((max - min) / 2));
};

const findRangeFactory = (lowerHalfSymbol, defaultMin, defaultMax) => partition =>
  partition
    .split('')
    .reduce(
      ({ min, max }, partitionSymbol) =>
        partitionSymbol === lowerHalfSymbol ? { min, max: getLowerHalf(min, max) } : { min: getUpperHalf(min, max), max },
      { min: defaultMin, max: defaultMax },
    );

const findMissingSeat = seatList => seatList
  .sort((a, b) => a - b)
  .reduce(
    (missing, seatId, index, array) => (seatId === array[index + 1] - 1 || index + 1 === array.length ? missing : seatId + 1),
    null,
  );

module.exports = (partitions = input) => {
  const seatList = partitions.map(partition => {
    const [_match, rowPartition, columnPartition] = partition.match(/(^[BF]{7})([LR]{3}$)/);

    const findRowRange = findRangeFactory('F', plane.minRowNumber, plane.maxRowNumber);
    const findColumnRange = findRangeFactory('L', plane.minColumnNumber, plane.maxColumnNumber);

    const row = findRowRange(rowPartition).min;
    const column = findColumnRange(columnPartition).max;

    return (row * 8) + column;
  });

  return { min: Math.min(...seatList), max: Math.max(...seatList), total: seatList.length, mine: findMissingSeat(seatList) };
};
