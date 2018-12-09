import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './Feedback.css';



class Feedback extends Component {
  
    clearList = () => {
        this.props.dispatch({type: 'CLEAR'});
    }



    submitFeedback = () => {
        axios.post('/feedback', this.props.reduxStore.feedbackData)
        .then(response => {
            this.clearList();
        })
        .catch(error => {
            console.log('error in post', error);
        })
        
    }

  render() {
    let button;
    if(this.props.reduxStore.feedbackData.feeling === 0 || this.props.reduxStore.feedbackData.understanding === 0 || this.props.reduxStore.feedbackData.support === 0){
        button = <button disabled>Feedback Incomplete</button>
    } else {
        button = <button onClick={this.submitFeedback}>Submit Feedback</button>
    }

    return (
      <div className="App">
      <h1>Your Feedback</h1>
       <ul>
           <li>Feeling: {this.props.reduxStore.feedbackData.feeling}</li>
           <li>Understanding: {this.props.reduxStore.feedbackData.understanding}</li>
           <li>Support: {this.props.reduxStore.feedbackData.support}</li>
           <li>Comments: {this.props.reduxStore.feedbackData.comments}</li>
           {button}
       </ul>
      </div>
    );
  }
}
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Feedback);