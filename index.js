import * as days from './days/index';

console.log('=== Advent of Code 2020 ===');

Object.values(days).forEach((dayExec) => {
  console.log('---------------------------');
  console.log(`## ${dayExec.name}\n`);
  console.time('ComputeTime');

  const result = dayExec();
  console.log('Result:', result);

  console.log('');
  console.timeEnd('ComputeTime');
});
