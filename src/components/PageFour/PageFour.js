import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class PageFour extends Component {
    state = {
        comments: '',
    }
    
    sendToRedux = () => {
        //dispatch to redux
        this.props.dispatch({type: 'ADD_COMMENTS', payload: this.state.comments})
    }

    changeState = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }
  render() {
    return (
      <div className="App">
        <h1>Do you have any additional comments?</h1>
            <input onChange={this.changeState} type="text" placeholder="Any comments?" name="comments"/>
        <button onClick={this.sendToRedux}><Link to="/thankyou">Finish</Link></button>
      </div>
    );
  }
}

export default withRouter(connect()(PageFour));