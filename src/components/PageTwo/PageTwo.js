import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Feedback from '../Feedback/Feedback';

class PageTwo extends Component {
    state = {
        understanding: 0,
    }
    
    sendToRedux = () => {
        //dispatch to redux
        this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.understanding})
    }

    changeState = (event) => {
        this.setState({
            understanding: event.target.value,
        })
    }

  render() {
    return (
      <div className="App">
        <h1>How well are you understanding the content?</h1>
        <select onChange={this.changeState}>
            <option selected disabled>1 = Not Well, 5 = Very Well</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button onClick={this.sendToRedux}><Link to="/3">Next</Link></button>
        <Feedback/>        
      </div>
    );
  }
}

export default withRouter(connect()(PageTwo));