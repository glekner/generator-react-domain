import Generator from 'yeoman-generator';
import defaultConfig from '../config';
import { getEntryAndNameFromInput } from '../helpers';

class StoriesGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', {
      type: String,
      required: true,
      desc: 'Your new component name',
    });
  }

  writing() {
    const { entriesPath } = this.config.defaults(defaultConfig);
    const { entry, name } = getEntryAndNameFromInput(this.options.name);

    const templatePath = this.templatePath('component.stories.js');

    const destinationPath = this.destinationPath(`${entriesPath}/${entry}/${name}.stories.js`);

    this.fs.copyTpl(templatePath, destinationPath, { name });
  }
}

module.exports = StoriesGenerator;
