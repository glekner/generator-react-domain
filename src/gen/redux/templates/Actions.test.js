import { testActionSnapshotWithFixtures } from 'react-redux-test-utils';
import { changeBool } from '../<%= name %>Actions';

const fixtures = {
  'should changeBool': () => changeBool({ bool: true }),
};

describe('<%= name %> actions', () => testActionSnapshotWithFixtures(fixtures));
