import chalk from 'chalk';
import toPascalCase from 'to-pascal-case';
import { camelCase } from 'lodash';

const initializePrompts = args => {
  const prompts = [];

  if (!args.path) {
    prompts.push({
      type: 'input',
      name: 'path',
      message: 'Enter your Components path',
      default: 'src/components',
      validate: value => value && value.length >= 3
    });
  }
  if (!args.name) {
    prompts.push({
      type: 'input',
      name: 'name',
      message: 'Enter your Component name',
      validate: value => value && value.length >= 3
    });
  }
  if (!args.redux) {
    prompts.push({
      type: 'confirm',
      name: 'redux',
      message: `Is your Component connected to ${chalk.blue('Redux')}?`
    });
  }
  return prompts;
};

const getPath = (path, name) => {
  const dirPath = `${path}/${name}`;
  return {
    component: `${dirPath}/${name}.js`,
    scss: `${dirPath}/${name.toLowerCase()}.scss`,
    fixtures: `${dirPath}/${name}.fixtures.js`,
    helper: `${dirPath}/${name}Helper.js`,
    actions: `${dirPath}/${name}Actions.js`,
    reducer: `${dirPath}/${name}Reducer.js`,
    constants: `${dirPath}/${name}Constants.js`,
    selectors: `${dirPath}/${name}Selectors.js`,
    index: `${dirPath}/index.js`
  };
};

const caseNames = name => ({
  name,
  name_lower: camelCase(name),
  name_upper: name.toUpperCase()
});

export { toPascalCase, camelCase, initializePrompts, getPath, caseNames };
