import {
  initializePrompts,
  getPath,
  caseNames,
  validatePrompt
} from '../src/helpers';

describe('helpers', () => {
  it('initializePrompts', () => {
    const allPrompts = initializePrompts({}, {});
    expect(allPrompts).toMatchSnapshot();

    // should return empty prompts
    const emptyPrompts = initializePrompts({
      path: 'some/path',
      name: 'name',
      redux: true
    });
    expect(emptyPrompts.length).toBe(0);

    // test validation
    const shouldFalse = validatePrompt('ss');
    const shouldTrue = validatePrompt('sss');

    expect(shouldFalse).toBeFalsy();
    expect(shouldTrue).toBeTruthy();
  });

  it('getPath', () => {
    const path = getPath('some/path', 'component name', 'index');
    expect(path).toMatchSnapshot();
  });

  it('caseNames', () => {
    const name = caseNames('coMpoNent');
    expect(name).toMatchSnapshot();
  });
});
