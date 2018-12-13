import Generator from 'yeoman-generator';
import { toPascalCase } from '../../helpers';

class ComponentGenerator extends Generator {
  writing() {
    const componentsPath = this.options.path;
    const componentName = toPascalCase(this.options.name);

    const destinationPath = this.destinationPath(
      `${componentsPath}/${componentName}/${componentName}.js`
    );
    this.fs.copyTpl(this.templatePath('component.js'), destinationPath, {
      name: componentName
    });
  }
}

module.exports = ComponentGenerator;
