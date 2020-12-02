import input from './input.json';

/**
 * @link https://adventofcode.com/2020/day/2
 * @description How many passwords are valid according to their policies?
 */

const regex = /(\d+-\d+).([a-z]{1}):\s(\w+)/; // 3 capturing groups: 1=policy, 2=letter, 3=password

const day02 = () => {
  const result = input.filter((line) => {
    const [_str, policy, letter, password] = line.match(regex);

    const totalMatching = policy.split('-').filter((index) => password[index - 1] === letter).length;

    if (totalMatching === 1) return true;

    return false;
  }).length;

  return result;
};

export default day02;
