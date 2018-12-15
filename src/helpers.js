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
  name,
  name_lower: camelCase(name),
  name_upper: name.toUpperCase()
});

export { toPascalCase, camelCase, initializePrompts, getPath, caseNames };
