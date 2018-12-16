import { testComponentSnapshotsWithFixtures } from 'react-redux-test-utils';

import <%= name %> from '../<%= name %>';

const fixtures = {
  'render without Props': {},
  /** fixtures, props for the component */
};

describe('<%= name %>', () => {
  describe('rendering', () =>
    testComponentSnapshotsWithFixtures(<%= name %>, fixtures));
});
