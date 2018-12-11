import React, { Component } from 'react';
import PropTypes from 'prop-types';

class <%= name %> extends Component {
  componentDidMount() {
    // Do Something here
  }

  render() {
    const { children, className } = this.props;
    return <div className={className}>{children}</div>;
  }
}

<%= name %>.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

<%= name %>.defaultProps = {
  className: '',
  children: null,
};

export default <%= name %>;