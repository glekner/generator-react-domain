import Generator from 'yeoman-generator';
import { getPath, caseNames, getTemplatePath } from '../../helpers';

class BaseGenerator extends Generator {
  copyTemplates(templates, name, path) {
    // check if consumer has templates
    const consumerPath = this.config.get('templatesPath');

    templates.forEach(file =>
      this.fs.copyTpl(
        getTemplatePath(file, consumerPath, this.sourceRoot()),
        this.destinationPath(getPath(path, name, file)),
        caseNames(name)
      )
    );
  }
}

export default BaseGenerator;
