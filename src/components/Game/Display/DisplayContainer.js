import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from './Display';

const mapStateToProps = state => ({
  message: state.message,
});

class DisplayContainer extends Component {
  render() {
    const { message } = this.props;
    return <Display message={message} />;
  }
}

export default connect(mapStateToProps)(DisplayContainer);
