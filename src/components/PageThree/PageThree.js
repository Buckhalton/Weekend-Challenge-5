import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Feedback from '../Feedback/Feedback';

class PageThree extends Component {
    state = {
        support: 0,
    }
    
    sendToRedux = () => {
        //dispatch to redux
        this.props.dispatch({type: 'ADD_SUPPORT', payload: this.state.support})
    }

    changeState = (event) => {
        this.setState({
            support: event.target.value,
        })
    }

  render() {
    return (
      <div className="App">
        <h1>How well are you being supported?</h1>
        <select onChange={this.changeState}>
            <option selected disabled>1 = Not at all, 5 = Very Well</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button onClick={this.sendToRedux}><Link to="/4">Next</Link></button>
        <Feedback/>
      </div>
    );
  }
}

export default withRouter(connect()(PageThree));