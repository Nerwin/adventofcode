const inquirer = require('inquirer');

(async () => {
  console.log('=== Advent of Code ===\n');

  const { year } = await inquirer.prompt([
    {
      type: 'list',
      name: 'year',
      message: 'Which year do you want to run ?',
      choices: ['2020', '2021'],
    },
  ]);

  switch (year) {
    case '2020':
      require('./2020');
      break;
    case '2021':
      require('./2021');
      break;
  }
})();
