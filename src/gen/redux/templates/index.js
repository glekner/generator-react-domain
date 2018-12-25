import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './<%= name %>Actions';
import reducer from './<%= name %>Reducer';
import { selectBool } from './<%= name %>Selectors';

import <%= name %> from './<%= name %>';

// map state to props
const mapStateToProps = state => ({
  /** add state keys here */
  bool: selectBool(state),
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = { <%= name_lower %>: reducer };

// export connected component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= name %>);
