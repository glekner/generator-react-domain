import Immutable from 'seamless-immutable';

import { <%= name_upper %>_CHANGE_BOOL } from './<%= name %>Constants';

const initialState = Immutable({
  /** insert <%= name %> state here */
  bool: false,
});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case <%= name_upper %>_CHANGE_BOOL:
      return state.set('bool', payload.bool);

    default:
      return state;
  }
};
