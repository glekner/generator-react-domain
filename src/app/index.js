import Generator from 'yeoman-generator';
import chalk from 'chalk';

class InitialGenerator extends Generator {
  async prompting() {
    this.log((`\nWelcome to ${chalk.blue('react-domain-generator')}!\n`));

    const prompts = [
      {
        type: 'input',
        name: 'path',
        message: 'Enter your Components path',
        default: 'src/components',
        validate: value => value && value.length >= 3,
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter your Component name',
        validate: value => value && value.length >= 3,
      },
      {
        type: 'confirm',
        name: 'redux',
        message: `Is your Component connnected to ${chalk.blue('Redux')}?`,
      },
    ];

    this.answers = await this.prompt(prompts);
  }

  writing() {
    this.composeWith(require.resolve('../component'), { name: this.answers.name, path: this.answers.path });
  }
}

module.exports = InitialGenerator;
