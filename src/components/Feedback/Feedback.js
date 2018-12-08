import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feedback extends Component {
  render() {
    return (
      <div className="App">
       <p>This is the feedback Section</p>
      </div>
    );
  }
}

export default connect()(Feedback);