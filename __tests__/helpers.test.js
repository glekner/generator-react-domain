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
    const paths = {
    indexPath: getPath('some/path', 'component name', 'index'),
    testPath: getPath('some/path', 'component name', 'index.test'),
    scssPath: getPath('some/path', 'component name', 'scss'),
    fixturesPath: getPath('some/path', 'component name', 'fixtures'),
    actionsPath: getPath('some/path', 'component name', 'Actions')
    }
    expect(paths).toMatchSnapshot();
  });

  it('caseNames', () => {
    const name = caseNames('coMpoNent');
    expect(name).toMatchSnapshot();
  });
});
