import toPascalCase from 'to-pascal-case';
import { camelCase } from 'lodash';

export const getEntryAndNameFromInput = (input) => {
  let [entry, name = entry] = input.split('/');

  entry = toPascalCase(entry);
  name = toPascalCase(name);

  return { entry, name };
};

export { toPascalCase, camelCase };
