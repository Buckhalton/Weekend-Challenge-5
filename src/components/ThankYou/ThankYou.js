import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Feedback from '../Feedback/Feedback';




class ThankYou extends Component {
  render() {
    return (
      <div className="App">
        <h1>Thanks for the feedback!</h1>
        <Feedback/>
      </div>
    );
  }
}

export default withRouter(connect()(ThankYou));