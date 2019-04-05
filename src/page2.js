import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page2 extends Component {
  constructor(props: P, context: any) {
    super(props, context);
    console.log('page2: constructor');
  }

  // deprecated!!
  componentWillMount(): void {
    console.log('page2: cwm');
  }

  componentDidMount(): void {
    console.log('page2: cdm');
  }

  render() {
    console.log('page2: render');
    return (
      <div>
        Page 2: msg={this.props.msg}
      </div>
    );
  }

  componentWillUnmount(): void {
    console.log('page2: cwu');
    this.props.dispatch({ type: 'MSG_SET', payload: 'Hello from page2' });
  }
}


const mapStateToProps = (state) => ({
  msg: state
});

export default connect(mapStateToProps)(Page2);