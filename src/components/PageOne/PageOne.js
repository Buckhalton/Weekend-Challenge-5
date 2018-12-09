import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Feedback from '../Feedback/Feedback';

class PageOne extends Component {
    state = {
        feeling: 0,
    }

sendToRedux = () => {
    //dispatch to redux
    this.props.dispatch({type: 'ADD_FEELING', payload: this.state.feeling})
}

changeState = (event) => {
    this.setState({
        feeling: event.target.value,
    })
}

  render() {
    return (
      <div className="App">
        <h1>How are you feeling today?</h1>
        <select onChange={this.changeState}>
            <option selected disabled>1 = Terrible, 5 = Great</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <button onClick={this.sendToRedux}><Link to="/2">Next</Link></button>
        <Feedback/>
      </div>
    );
  }
}

export default withRouter(connect()(PageOne));