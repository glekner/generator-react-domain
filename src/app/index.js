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

    const prompts = initializePrompts(this.options, this.config.getAll());
    this.answers = await this.prompt(prompts);
    this.results = { ...this.options, ...this.answers };
  }

  writing() {
    const genProps = {
      name: this.results.name,
      path: this.results.path || this.config.get('componentsPath'),
      redux: this.results.redux || this.config.get('redux')
    };

    this.composeWith(require.resolve('../gen/component'), genProps);
    if (genProps.redux)
      this.composeWith(require.resolve('../gen/redux'), genProps);
  }

  install() {
    if (!this.config.get('test-utils-installed')) {
      this.log(
        `\n${chalk.bold(chalk.blueBright('Installing required packages...'))}\n`
      );
      this.npmInstall(['react-redux-test-utils'], { saveDev: true });
      this.config.set('test-utils-installed', true);
    }
  }

  end() {
    this.log(`\n${chalk.bold(chalk.greenBright('done!'))}\n`);
  }
}

module.exports = InitialGenerator;
