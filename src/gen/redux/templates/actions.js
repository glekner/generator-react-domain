import { <%= name_upper %>_CHANGE_BOOL } from './<%= name %>Constants';

export const changeBool = resource => dispatch => {
  dispatch({
    type: <%= name_upper %>_CHANGE_BOOL,
    payload: resource,
  });
};