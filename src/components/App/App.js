import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feedback from '../Feedback/Feedback';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import Header from '../Header/Header';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <div>
          <button><Link to="/1">FeedBack Start</Link></button>
            <Route path="/1" component={PageOne}/>
            <Route path="/2" component={PageTwo}/>
            <Route path="/3" component={PageThree}/>
            <Route path="/4" component={PageFour}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
