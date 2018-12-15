import Generator from 'yeoman-generator';
import { reduxFiles } from '../../config';
import { toPascalCase, getPath, caseNames } from '../../helpers';

class ReduxGenerator extends Generator {
  writing() {
    const componentName = toPascalCase(this.options.name);
    const paths = getPath(this.options.path, componentName);

    // check if consumer has templates
    const consumerTemplatesPath = this.config.get('templatesPath');
    const templatePath = file => {
      if (consumerTemplatesPath) {
        if (this.fs.exists(`${consumerTemplatesPath}/${file}.js`))
          return `${consumerTemplatesPath}/${file}.js`;
      }
      return this.templatePath(`${file}.js`);
    };

    reduxFiles.forEach(file =>
      this.fs.copyTpl(
        templatePath(file),
        this.destinationPath(paths[file]),
        caseNames(componentName)
      )
    );
  }
}

module.exports = ReduxGenerator;
