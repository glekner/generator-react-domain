import Generator from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';
import { entriesPath } from '../config';

class InstallerGenerator extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to ${chalk.red('generator-react-domain')} generator!`));

    const prompts = [
      {
        type: 'input',
        name: 'entriesPath',
        message: 'Enter you entries path',
        default: entriesPath,
        validate: value => value && value.length >= 3,
      },
    ];

    this.props = await this.prompt(prompts);
  }

  writing() {
    this.log('Do something...');
  }
}

module.exports = InstallerGenerator;
