import Generator from 'yeoman-generator';
import { toPascalCase, getPath, caseNames } from '../../helpers';

class BaseGenerator extends Generator {
  copyTemplates(templates, name, path) {
    const componentName = toPascalCase(name);
    const paths = getPath(path, componentName);

    // check if consumer has templates
    const consumerTemplatesPath = this.config.get('templatesPath');
    const templatePath = file => {
      if (consumerTemplatesPath) {
        if (this.fs.exists(`${consumerTemplatesPath}/${file}.js`))
          return `${consumerTemplatesPath}/${file}.js`;
      }
      return this.templatePath(`${file}.js`);
    };

    templates.forEach(file =>
      this.fs.copyTpl(
        templatePath(file),
        this.destinationPath(paths[file]),
        caseNames(componentName)
      )
    );
  }
}

export default BaseGenerator;