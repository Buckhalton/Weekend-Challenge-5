import React, { Component } from 'react';
import {connect} from 'react-redux';
import Feedback from '../Feedback/Feedback';
import { Link, withRouter } from 'react-router-dom';

class PageFour extends Component {
  render() {
    return (
      <div className="App">
        <h1>How are you feeling today?</h1>
            <input type="text" placeholder="Any comments?" name="comments"/>
        <button><Link to="/">Submit</Link></button>
      </div>
    );
  }
}

export default withRouter(connect()(PageFour));