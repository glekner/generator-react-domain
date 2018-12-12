import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

describe('generator-react-domain:app', () => {
  const generatorPath = path.join(__dirname, '../src/app');

  it('yo react-domain', async () => {
    await helpers.run(generatorPath).withPrompts({ path: 'some/path', name: 'component', redux: true });

    assert(1, 1);
  });
});
