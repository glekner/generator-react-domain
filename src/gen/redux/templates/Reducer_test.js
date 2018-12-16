import { testReducerSnapshotWithFixtures } from 'react-redux-test-utils';

import { <%= name_upper %>_CHANGE_BOOL } from '../<%= name %>Constants';
import reducer from '../<%= name %>Reducer';

const fixtures = {
  'should return the initial state': {},
  'should handle <%= name_upper %>_CHANGE_BOOL': {
    action: {
      type: <%= name_upper %>_CHANGE_BOOL,
      payload: {
        bool: true,
      },
    },
  },
};

describe('<%= name %> reducer', () =>
  testReducerSnapshotWithFixtures(reducer, fixtures));
