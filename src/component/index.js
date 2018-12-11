import Generator from 'yeoman-generator';
import config from '../config';
import { getEntryAndNameFromInput } from '../helpers';

class ComponentGenerator extends Generator {
  constructor(...args) {
    super(...args);

    this.argument('name', {
      type: String,
      required: true,
      desc: 'Your new component name',
    });

    this.option('stories', {
      type: Boolean,
      default: false,
      description: 'generate a story file',
    });
  }

  initializing() {
    // Compose with test generator
    // if (this.options.test) {
    //   this.composeWith(require.resolve('../test'), {
    //     arguments: [this.options.name]
    //   });
    // }

    // Compose with stories generator
    if (this.options.stories) {
      this.composeWith(require.resolve('./templates/component.stories.js'), {
        arguments: [this.options.name],
      });
    }
  }

  writing() {
    const { templatesPath } = this.config.defaults(config);
    const { entry, name } = getEntryAndNameFromInput(this.options.name);

    const templatePath = this.options.state
      ? this.templatePath('component-with-state.js')
      : this.templatePath('component.js');

    const destinationPath = this.destinationPath(`${templatesPath}/${entry}/${name}.js`);

    this.fs.copyTpl(templatePath, destinationPath, { name });
  }
}

module.exports = ComponentGenerator;
