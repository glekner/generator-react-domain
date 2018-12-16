import React from 'react';
import { IntegrationTestHelper } from 'react-redux-test-utils';

import <%= name %>, { reducers } from '../index';

describe('<%= name %> integration test', () => {
  it('should flow', async () => {
    const integrationTestHelper = new IntegrationTestHelper(reducers);
    const component = integrationTestHelper.mount(<<%= name %> />);
    component.update();
    /** Create a Flow test */
  });
});
