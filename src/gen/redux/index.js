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

    this.fs.copyTpl(this.templatePath('actions.js'), this.destinationPath(paths.actions), {
      name: componentName,
      name_upper: componentName.toUpperCase(),
    });

    this.fs.copyTpl(this.templatePath('constants.js'), this.destinationPath(paths.constants), {
      name_upper: componentName.toUpperCase(),
    });

    this.fs.copyTpl(this.templatePath('reducer.js'), this.destinationPath(paths.reducer), {
      name: componentName,
      name_upper: componentName.toUpperCase(),
    });

    this.fs.copyTpl(this.templatePath('selectors.js'), this.destinationPath(paths.selectors), {
      name: componentName,
      name_lower: camelCase(componentName),
    });
  }
}

module.exports = ReduxGenerator;
