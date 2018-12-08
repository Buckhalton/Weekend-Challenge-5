import React, { Component } from 'react';
import {connect} from 'react-redux';
import Feedback from '../Feedback/Feedback';
import { Link, withRouter } from 'react-router-dom';

class PageTwo extends Component {
  render() {
    return (
      <div className="App">
        <h1>How well are you understanding the content?</h1>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button><Link to="/3">Submit</Link></button>        
        <Feedback/>
      </div>
    );
  }
}

export default withRouter(connect()(PageTwo));