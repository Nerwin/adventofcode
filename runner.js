const { table } = require('table');

module.exports = function (year, days) {
  const results = Object.keys(days).reduce((acc, currentDay) => {
    const start = process.hrtime();
    const result = days[currentDay]();
    const end = process.hrtime(start);
    acc.push([currentDay.replace('day', ''), JSON.stringify(result), `${(end[1] / 1000000).toFixed(2)}ms`]);
    return acc;
  }, []);

  const config = {
    singleLine: true,
    header: {
      alignment: 'center',
      content: `Advent of Code\n== ${year} ==\n`,
    },
  };
  const headers = [
    ['Day', 'Result', 'Time'],
    ['---', '------', '----'],
  ];
  console.log();
  console.log(table([...headers, ...results], config));
};
