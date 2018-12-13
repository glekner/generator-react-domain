import Generator from 'yeoman-generator';
import { toPascalCase, camelCase, getPath } from '../../helpers';

class ReduxGenerator extends Generator {
  writing() {
    const componentsPath = this.options.path;
    const componentName = toPascalCase(this.options.name);
    const paths = getPath(componentsPath, componentName, this.destinationPath);

    this.fs.copyTpl(this.templatePath('index.js'), this.destinationPath(paths.index), {
      name: componentName,
      name_lower: camelCase(componentName),
    });
  }
}

module.exports = ReduxGenerator;
