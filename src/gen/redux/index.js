import BaseGenerator from '../base';
import { REDUX_TPL } from '../../constants';

class ReduxGenerator extends BaseGenerator {
  writing() {
    this.copyTemplates(REDUX_TPL, this.options.name, this.options.path);
  }
}

module.exports = ReduxGenerator;
