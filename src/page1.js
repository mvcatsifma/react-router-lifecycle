import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page1 extends Component {
  constructor(props: P, context: any) {
    super(props, context);
    console.log('page1: constructor');
  }

// deprecated!!
  componentWillMount(): void {
    console.log('page1: cwm');
  }

  componentDidMount(): void {
    console.log('page1: cdm');
  }

  render() {
    console.log('page1: render');
    return (
      <div>
        Page 1: msg={this.props.msg}
      </div>
    );
  }

  componentWillUnmount(): void {
    console.log('page1: cwu');
    this.props.dispatch({ type: 'MSG_SET', payload: 'Hello from page1' });
  }
}

const mapStateToProps = (state) => ({
  msg: state
});

export default connect(mapStateToProps)(Page1);