import Generator from 'yeoman-generator';
import chalk from 'chalk';
import { initializePrompts } from '../helpers';

class InitialGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('path', { type: String, required: false });
    this.argument('name', { type: String, required: false });
    this.option('redux');
  }

  async prompting() {
    this.log(`\n${chalk.bold(chalk.blue('react-domain-generator'))}\n`);

    const prompts = initializePrompts(this.options);
    this.answers = await this.prompt(prompts);
  }

  writing() {
    const results = { ...this.options, ...this.answers };
    const genProps = {
      name: results.name,
      path: results.path,
    };

    this.composeWith(require.resolve('../gen/component'), genProps);
    if (results.redux) this.composeWith(require.resolve('../gen/redux'), genProps);
  }
}

module.exports = InitialGenerator;
