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
  switch (type) {
    case 'index':
    return `${path}/${name}/index.js`;
    
    case 'component':
    return `${path}/${name}/${name}.js`;

    case 'scss':
    return `${path}/${name}/${name.toLowerCase()}.scss`;

    case 'fixtures':
    return `${path}/${name}/${name}.fixtures.js`;
  
    default:
    return `${path}/${name}/${toPascalCase(`${name} ${type}`)}.js`;
  }
};

const caseNames = name => ({
  name,
  name_lower: camelCase(name),
  name_upper: name.toUpperCase()
});

export { toPascalCase, camelCase, initializePrompts, getPath, caseNames };
