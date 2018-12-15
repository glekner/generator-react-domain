import BaseGenerator from '../base';
import { REACT_TPL } from '../../constants';

class ComponentGenerator extends BaseGenerator {
  writing() {
    this.copyTemplates(REACT_TPL, this.options.name, this.options.path);
  }
}

module.exports = ComponentGenerator;
