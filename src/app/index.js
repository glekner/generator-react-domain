import Generator from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';

class InitialGenerator extends Generator {
  async prompting() {
    this.log(yosay(`Welcome to ${chalk.blue('react-domain')} generator!`));

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
    ];

    this.answers = await this.prompt(prompts);
  }

  writing() {
    this.composeWith(require.resolve('../component'), { name: this.answers.name, path: this.answers.path });
  }
}

module.exports = InitialGenerator;
