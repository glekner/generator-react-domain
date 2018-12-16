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
          path.join(__dirname, '../src/gen/component/templates/component.js'),
          path.join(dir, 'component.js')
        );
      })
      .withPrompts({ name: 'component', redux: false })
      .withLocalConfig({ componentsPath: 'src/components' })
      .then(dir => {
        assert.file(`${dir}/component.js`);
      });
  });

  it('react-domain flow w/redux', async () => {
    await helpers
      .run(generatorPath)
      .inTmpDir(dir => {
        fs.copyFileSync(
          path.join(__dirname, '../src/gen/component/templates/component.js'),
          path.join(dir, 'component.js')
        );
      })
      .withPrompts({ name: 'component', redux: true })
      .withLocalConfig({ componentsPath: 'src/components' })
      .then(dir => {
        assert.file(`${dir}/component.js`);
      });
  });

  it('base generator flow override template', async () => {
    await helpers
      .run(path.join(__dirname, '../src/gen/component'))
      .inTmpDir(dir => {
        fs.mkdirSync(`${dir}/templates`);
        fs.copyFileSync(
          path.join(__dirname, '__mocks__/component.js'),
          path.join(`${dir}/templates`, 'component.js')
        );
      })
      .withOptions({ name: 'component', path: 'src/components' })
      .withLocalConfig({
        templatesPath: 'templates'
      })
      .then(dir => {
        assert.file(`${dir}/src/components/Component/Component.js`);
      });

      // Redux
      await helpers
      .run(path.join(__dirname, '../src/gen/redux'))
      .inTmpDir(dir => {
        fs.mkdirSync(`${dir}/templates`);
        fs.copyFileSync(
          path.join(__dirname, '__mocks__/index.js'),
          path.join(`${dir}/templates`, 'index.js')
        );
      })
      .withOptions({ name: 'component', path: 'src/components' })
      .withLocalConfig({
        templatesPath: 'templates'
      })
      .then(dir => {
        assert.file(`${dir}/src/components/Component/index.js`);
      });
  });
});
