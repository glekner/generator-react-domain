import fs from 'fs';
import toPascalCase from 'to-pascal-case';
import { camelCase } from 'lodash';

export const validatePrompt = value => value && value.length >= 3;

export const initializePrompts = (args, config) => {
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
  return prompts;
};

export const getPath = (path, name, type) => {
  const pascalName = toPascalCase(name);
  if (type.includes('test')) {
    if (type.includes('Component'))
      return `${path}/${pascalName}/__tests__/${pascalName}.test.js`;

    return `${path}/${pascalName}/__tests__/${toPascalCase(
      `${name} ${type.split('_')[0]}`
    )}.test.js`;
  }

  switch (type) {
    case 'index':
      return `${path}/${pascalName}/index.js`;

    case 'Component':
      return `${path}/${pascalName}/${pascalName}.js`;

    case 'Fixtures':
      return `${path}/${pascalName}/${pascalName}.fixtures.js`;

    case 'Scss':
      return `${path}/${pascalName}/${camelCase(name)}.scss`;

    default:
      return `${path}/${pascalName}/${toPascalCase(`${name} ${type}`)}.js`;
  }
};

export const caseNames = name => ({
  name: toPascalCase(name),
  name_lower: camelCase(name),
  name_upper: name.replace(/\s+/g, '').toUpperCase()
});

export const getTemplatePath = (file, consumerPath, sourceRoot) => {
  const lowerCasedName = file.toLowerCase();

  if (consumerPath) {
    if (fs.existsSync(`${consumerPath}/${file}.js`))
      return `${consumerPath}/${file}.js`;

    if (fs.existsSync(`${consumerPath}/${lowerCasedName}.js`))
      return `${consumerPath}/${lowerCasedName}.js`;
  }

  if (fs.existsSync(`${sourceRoot}/${file}.js`)) return `${sourceRoot}/${file}.js`;

  return `${sourceRoot}/${lowerCasedName}.js`;
};
