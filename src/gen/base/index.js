import Generator from 'yeoman-generator';
import { getPath, caseNames } from '../../helpers';

class BaseGenerator extends Generator {
  copyTemplates(templates, name, path) {
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
        this.destinationPath(getPath(path, name, file)),
        caseNames(name)
      )
    );
  }
}

export default BaseGenerator;