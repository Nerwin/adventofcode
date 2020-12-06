import path from 'path';
import fs from 'fs';

/**
 * @link https://adventofcode.com/2020/day/6
 * @description For each group, count the number of questions to which everyone answered "yes". What is the sum of those counts?
 */

const day06 = () => {
  const answers = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8').toString().split(/\n\s+/);

  const result = answers.reduce((acc, answer) => {
    const answerArray = answer.split('\n');
    if (answerArray.length === 1) return acc + answerArray[0].length;

    const shortestAnswer = answerArray.sort((a, b) => a.length - b.length).shift();
    const answeredByEveryone = shortestAnswer.split('').filter((letter) => {
      return answerArray.every((v) => v.includes(letter));
    });

    return acc + answeredByEveryone.length;
  }, 0);

  return result;
};

export default day06;
