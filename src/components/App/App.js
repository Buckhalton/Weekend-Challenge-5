import React, { Component } from 'react';
import './App.css';
import Feedback from '../Feedback/Feedback';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import Header from '../Header/Header';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ThankYou from '../ThankYou/ThankYou';
import AdminPage from '../AdminPage/AdminPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <div>
            <Route path="/1" component={PageOne}/>
            <Route path="/2" component={PageTwo}/>
            <Route path="/3" component={PageThree}/>
            <Route path="/4" component={PageFour}/>
            <Route path="/5" component={ThankYou}/>
            <Route path="/admin" component={AdminPage}/>
            <Feedback/>
            <button><Link to="/1">New Feedback</Link></button>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
