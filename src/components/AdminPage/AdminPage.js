import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class AdminPage extends Component {
    state = {
        feedback: [],
    };

    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback = () => {
        axios.get('/feedback')
        .then(response => {
            this.setState({
                feedback: response.data
            })
        })
        .catch(error => {
            console.log('Error in get:', error);
        })
    }

    deleteFeedback = (completedForm) => {
        axios.delete(`/feedback/${completedForm.id}`)
        .then(response => {
            this.getFeedback();
        })
        .catch(error => {
            console.log('Error in delete', error);
        })
    }

  render() {
    let feedbackRow = this.state.feedback.map(completedForm => {
        return <tr key={completedForm.id}>
        <td>{completedForm.feeling}</td>
        <td>{completedForm.understanding}</td>
        <td>{completedForm.support}</td>
        <td>{completedForm.comments}</td>
        <td><button onClick={() => this.deleteFeedback(completedForm)}>X</button></td>
        </tr>
    });
    return (
        <div>
            <table>
                <thead>
                    <th>Feeling:</th>
                    <th>Understanding:</th>
                    <th>Support:</th>
                    <th>Comments:</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {feedbackRow}
                </tbody>
            </table>
        </div>
    );
  }
}
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default withRouter(connect(mapStateToProps)(AdminPage));