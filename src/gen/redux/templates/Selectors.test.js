import { testSelectorsSnapshotWithFixtures } from 'react-redux-test-utils';
import { select<%= name %>, selectBool } from '../<%= name %>Selectors';

const state = {
  <%= name_lower %>: {
    bool: false,
  },
};

const fixtures = {
  'should return <%= name %>': () => select<%= name %>(state),
  'should return <%= name %> bool': () => selectBool(state),
};

describe('<%= name %> selectors', () => testSelectorsSnapshotWithFixtures(fixtures));
