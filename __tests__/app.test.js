import fs from 'fs';
import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

describe('generator-react-domain:app', () => {
  const generatorPath = path.join(__dirname, '../src/app');

  it('react-domain flow', async () => {
    await helpers
      .run(generatorPath)
      .inTmpDir(dir => {
        fs.copyFileSync(
          path.join(__dirname, '__mocks__/Component.js'),
          path.join(dir, 'Component.js')
        );
      })
      .withPrompts({ name: 'component', redux: false })
      .withLocalConfig({ componentsPath: 'src/components', "test-utils-installed": true })
      .then(dir => {
        assert.file(`${dir}/Component.js`);
      });
  });

  it('react-domain flow w/redux and yarn install', async () => {
    await helpers
      .run(generatorPath)
      .inTmpDir(dir => {
        fs.copyFileSync(
          path.join(__dirname, '../src/gen/component/templates/Component.js'),
          path.join(dir, 'Component.js')
        );
      })
      .withPrompts({ name: 'component' })
      .withLocalConfig({ componentsPath: 'src/components', redux: true, yarn: true })
      .then(dir => {
        assert.file(`${dir}/Component.js`);
      });
  });

  it('react-domain flow w/redux and no package installations', async () => {
    await helpers
      .run(generatorPath)
      .inTmpDir(dir => {
        fs.copyFileSync(
          path.join(__dirname, '../src/gen/component/templates/Component.js'),
          path.join(dir, 'Component.js')
        );
      })
      .withPrompts({ name: 'component' })
      .withLocalConfig({ componentsPath: 'src/components', redux: true, depsInstalled: true })
      .then(dir => {
        assert.file(`${dir}/Component.js`);
      });
  });

  it('base generator flow override template', async () => {
    await helpers
      .run(path.join(__dirname, '../src/gen/component'))
      .inTmpDir(dir => {
        fs.mkdirSync(`${dir}/templates`);
        fs.copyFileSync(
          path.join(__dirname, '__mocks__/Component.js'),
          path.join(`${dir}/templates`, 'Component.js')
        );
      })
      .withOptions({ name: 'component', path: 'src/components' })
      .withLocalConfig({
        templatesPath: 'templates'
      })
      .then(dir => {
        assert.file(`${dir}/src/components/Component/Component.js`);
      });
  });
});
