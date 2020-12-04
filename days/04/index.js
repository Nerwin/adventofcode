import path from 'path';
import fs from 'fs';

/**
 * @link https://adventofcode.com/2020/day/4
 * @description Count the number of valid passports - those that have all required fields and valid values
 */

const inRange = (value, min, max) => value >= min && value <= max;
const fieldValidator = {
  byr: { validate: (value) => inRange(value, 1920, 2002) },
  iyr: { validate: (value) => inRange(value, 2010, 2020) },
  eyr: { validate: (value) => inRange(value, 2020, 2030) },
  hgt: {
    validate: (value) => {
      const [_match, size, metric] = value.match(/(\d{2,3})(cm|in)/) || [];
      return (metric === 'cm' && inRange(size, 150, 193)) || (metric === 'in' && inRange(size, 59, 76));
    },
  },
  hcl: {
    validate: (value) => value.search(/#[\da-f]{6}/) !== -1,
  },
  ecl: { validate: (value) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value) },
  pid: {
    validate: (value) => !isNaN(value) && value.length === 9,
  },
};

const day04 = () => {
  const passports = fs.readFileSync(path.resolve(__dirname, 'input.txt')).toString().split(/\n\s+/);

  const result = passports.filter((passport) => {
    return Object.keys(fieldValidator).every((fieldName) => {
      const match = passport.match(new RegExp(`${fieldName}:(#?\\w+)`));
      if (!match) return false;
      return fieldValidator[fieldName].validate(match[1]);
    });
  }).length;

  return result;
};

export default day04;
