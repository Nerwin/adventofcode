const path = require('path');
const fs = require('fs');

/**
 * @link https://adventofcode.com/2020/day/4
 * @description Count the number of valid passports - those that have all required fields and valid values
 */

const isInRange = (value, min, max) => value >= min && value <= max;

const fieldValidator = {
  byr: { validate: value => isInRange(value, 1920, 2002) },
  iyr: { validate: value => isInRange(value, 2010, 2020) },
  eyr: { validate: value => isInRange(value, 2020, 2030) },
  hcl: { validate: value => value.search(/#[\da-f]{6}/) !== -1 },
  ecl: { validate: value => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value) },
  pid: { validate: value => !Number.isNaN(value) && value.length === 9 },
  hgt: {
    validate: value => {
      const [_match, size, metric] = value.match(/(\d{2,3})(cm|in)/) || [];
      return (metric === 'cm' && isInRange(size, 150, 193)) || (metric === 'in' && isInRange(size, 59, 76));
    },
  },
};

module.exports = () => {
  const passports = fs.readFileSync(path.resolve(__dirname, 'input.txt')).toString().split(/\n\s+/);

  const result = passports.filter(passport => Object.keys(fieldValidator).every(fieldName => {
    const matches = passport.match(new RegExp(`${fieldName}:(#?\\w+)`));
    return matches && fieldValidator[fieldName].validate(matches[1]);
  })).length;

  return result;
};
