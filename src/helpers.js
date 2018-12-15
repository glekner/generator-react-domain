import chalk from 'chalk';
import toPascalCase from 'to-pascal-case';
import { camelCase } from 'lodash';

const validatePrompt = value => value && value.length >= 3;

const initializePrompts = (args, config) => {
  const prompts = [];

  if (!args.path && !config.componentsPath) {
    prompts.push({
      type: 'input',
      name: 'path',
      message: 'Enter your Components path',
      default: 'src/components',
      validate: validatePrompt
    });
  }
  if (!args.name) {
    prompts.push({
      type: 'input',
      name: 'name',
      message: 'Enter your Component name',
      validate: validatePrompt
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

const getPath = (path, name, type) => {
  const pascalName = toPascalCase(name);
  switch (type) {
    case 'index':
      return `${path}/${pascalName}/index.js`;

    case 'component':
      return `${path}/${pascalName}/${pascalName}.js`;

    case 'fixtures':
      return `${path}/${pascalName}/${pascalName}.fixtures.js`;

    case 'scss':
      return `${path}/${pascalName}/${camelCase(name)}.scss`;

    default:
      return `${path}/${pascalName}/${toPascalCase(`${name} ${type}`)}.js`;
  }
};

const caseNames = name => ({
  name: toPascalCase(name),
  name_lower: camelCase(name),
  name_upper: name.replace(/\s+/g, '').toUpperCase()
});

export {
  toPascalCase,
  camelCase,
  initializePrompts,
  validatePrompt,
  getPath,
  caseNames
};
