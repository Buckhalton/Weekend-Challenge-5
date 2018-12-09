import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';



class ThankYou extends Component {
  render() {
    return (
      <div className="App">
        <h1>Thanks for the feedback!</h1>
      </div>
    );
  }
}

export default withRouter(connect()(ThankYou));